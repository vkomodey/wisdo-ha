import { Request } from 'express';
import postRepository from './repository';
import {PostEntity} from './entity';

class Controller {
  private repository = postRepository;
  async createPost(req: Request, country: string) {
    const user = new PostEntity({
      title: req.body.title,
      summary: req.body.summary,
      body: req.body.body,
      author: req.body.author,
      country: country,
      community: req.body.community
    });

    const id = await this.repository.create(user);

    return {id};
  }

  async likePost(postId: string) {
    await this.repository.incrementLikes(postId);
  }

  /**
   * The idea here is to have already precalculated scores(since it might be heavy operation) on top of paginated requests
   * First of all we are interested in posts from the requester's country. If we have enough posts from that country(based on
   * the pagination limit) - we don't need to get posts from different countries
   * The pagination is TODO. For the pagination we can use cursor based pagination(https://docs.stripe.com/api/pagination)
   * which should take into the account country parameter
   */
  async feed(communityId: string, country: string) {
    const defaultLimitLength = 20;
    let posts = await this.repository.feed(country, true, communityId, defaultLimitLength);
    if (posts.length < defaultLimitLength) {
      const nonCountryLength = defaultLimitLength - posts.length;

      const nonCountryPosts = await this.repository.feed(country, false, communityId, nonCountryLength);

      posts.push(...nonCountryPosts);
    }

    return {posts: posts.map(post => ({
      _id: post._id,
      title: post.title,
      summary: post.summary,
      body: post.body,
      country: post.country,
      likes: post.likes,
      community: post.community,
      author: post.author
    }))};
  }
}

export default new Controller();
