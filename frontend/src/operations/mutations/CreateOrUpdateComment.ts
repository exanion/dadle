import { gql } from "@apollo/client";

export const CREATE_OR_UPDATE_COMMENT = gql`
  mutation CreateOrUpdateComment($pollId: ID!, $comment: PollCommentInput!) {
    createOrUpdateComment(pollId: $pollId, comment: $comment) {
      _id
      title
      link
      author
      comments {
        _id
        by
        text
      }
      options {
        _id
        type
        from
        to
        title
      }
      participations {
        _id
        author
        choices {
          choice
          option
        }
      }
    }
  }
`;