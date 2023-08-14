import { COMMENTS } from "../../app/shared/COMMENTS"

// filter returns more than one file

export const selectCommentsByCampsiteId = (campsiteId) => {
    return COMMENTS.filter((comment) => comment.campsiteId === parseInt(campsiteId))
}