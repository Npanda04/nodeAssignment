import { FillDataDtoQuery, QuerySchema } from "./../dtos/fill-data.dto";
import { Request, Response } from "express";
import formService from "../services/form-service";
import { CreateUserSchema } from "../dtos/create-user.dto";
import { FillDataSchema } from "../dtos/fill-data.dto";
import { z } from "zod";

class FormController {
  async createUser(req: Request, res: Response) {
    try {
      const createUserDto = CreateUserSchema.parse(req.body);
      const newUser = await formService.createUser(createUserDto);
      res.status(201).json(newUser);
    } catch (e) {
      res.status(400).json({ error: e });
    }
  }

  async createUserRecord(req: Request, res: Response) {
    try {
      const { title } = QuerySchema.parse(req.query);
      const data = FillDataSchema.parse(req.body);
      const newData = await formService.createUserRecord(title, data);
      res.status(201).json(newData);
    } catch (e) {
      res.status(400).json({ error: e });
    }
  }

  async getAllUserRecord(req: Request, res: Response) {
    try {
      const { title } = req.query;
      const submissions = await formService.getAllUserRecord(title as string);
      res.json(submissions);
    } catch (e) {
      res.status(400).json({ error: e });
    }
  }
}

export default new FormController();
