import HttpClient from '../httpclient';
export const services = {
  getLists: () => {
    return HttpClient.Get('/lists.json');
  },
};
