import { Issue } from '../types';
import IssueModel from '../models/issue';
// import emailService from './email';

const getAll = async (): Promise<Issue[]> => await IssueModel.find({});

const saveOne = async (document: any) => {
  const newIssue = new IssueModel({
    ...document,
    whenCreated: new Date().toISOString()
  });
  newIssue.save();

  /*emailService(`<h1>Issue Summary</h1>
  <table>
    <tr>
      <td>Name:</td>
      <td>${document.firstName} ${document.lastName}</td>
    </tr>
    <tr>
      <td>Email:</td>
      <td>${document.email}</td>
    </tr>
    <tr>
      <td>Phone:</td>
      <td>${document.phone}</td>
    </tr>
    <tr>
      <td>Issue description:</td>
      <td>${document.description}</td>
    </tr>
  </table>`);*/

  return {
    success: true,
    message: 'successful issue',
    data: newIssue
  };
};

const IssueService = { getAll, saveOne };

export default IssueService;
