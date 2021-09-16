import moment from 'moment';

export const formatDate = (timestamp) => {
    return moment(timestamp).format("H:mm ");
}