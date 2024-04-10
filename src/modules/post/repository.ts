import mongoose from "mongoose";
import PostModel, {IPost} from "./model";
import { PostEntity } from "./entity";
import { PostStatus } from "./constants";

class PostRepository {
  constructor(private model: mongoose.Model<IPost>) {
    this.model = model;
  }

  async incrementLikes(postId: string) {
    await this.model.findOneAndUpdate({_id: postId}, {$inc: {likes: 1}});
  }

  async create(post: PostEntity): Promise<string> {
    const model = new PostModel(post);

    await model.save();

    return model._id;
  }

  async feed(country: string, includeCountry: boolean, communityId: string, limit:number=20): Promise<PostEntity[]> {
    let query: any = {
      community: communityId,
      status: PostStatus.APPROVED,
    };
    if (includeCountry) {
      query.country = country;
    } else {
      query.country = {'$ne': country};
    }
    const result = await this.model.find(query).sort([['score', -1]]).limit(limit);

    return result.map(this.toEntity);
  }

  toEntity(post: IPost): PostEntity {
    return new PostEntity(post);
  }
}
const repo = new PostRepository(PostModel);
export default repo;