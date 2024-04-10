import PostModel from "../modules/post/model";


// TODO: this solution is not optimal, since MongoDB doesn't have a limit option for the updateMany operation
// probably you should do this by fetching appropriate IDs and the pass them to the actual job(can be done in paralel)
export default function updateScore() {
  let filterDate = new Date();
  filterDate.setHours(filterDate.getHours() - 1);
  const filter = {
    scoreUpdatedAt: {$lte: filterDate}
  };
  const queryForUpdate = [
    {
    $set: {
        score: {$add: [
            {$multiply: ['$likes', 0.8]},
            {$multiply: ['$bodyLength', 0.2]}
        ]},
        scoreUpdatedAt: new Date()
    }
  }];

  return PostModel.updateMany(filter, queryForUpdate);
}
