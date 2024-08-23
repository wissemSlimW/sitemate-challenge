import { Request, Response } from 'express';
import { IssueModel } from '../models/IssueModel';

class IssueController {
  async create(req: Request, res: Response) {
    try {
      const issue = await IssueModel.create(req.body);
      return res.status(200).json(issue);
    } catch (error: any) {
      res.status(500).json({ message: 'ERROR', error: error.message });
    }
  }

  async read(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (id) {
        const issue = await IssueModel.findById(id);
        if (issue) {
          return res.status(200).json(issue);
        }
        return res.status(400).json({
          error: 'issue not found',
          message: 'Not issue was found with the requested id'
        });
      }
      const issues = await IssueModel.find();
      return res.status(200).json(issues);
    } catch (error: any) {
      res.status(500).json({ message: 'ERROR', error: error.message });
    }
  }

  async destroy(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const foundIssue = await IssueModel.findById(id);
      if (!foundIssue) {
        return res.status(404).json({ message: 'Issue not found!' });
      }
      await foundIssue.deleteOne();
      res.status(200).json({
        message: 'Issue successfully deleted!',
      });
    } catch (error: any) {
      res.status(500).json({ message: 'ERROR', error: error.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const foundIssue = await IssueModel.findById(id);
      if (!foundIssue)
        return res.status(404).json({ message: 'Issue not found!' });
      const issue = await foundIssue.set(req.body).save();
      res.status(200).json(issue);
    } catch (error: any) {
      res.status(500).json({ message: 'ERROR', error: error.message });
    }
  }
}

export default new IssueController()