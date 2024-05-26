import prisma from "../prisma/prisma-service";
import { CreateUserDto } from "../dtos/create-user.dto";
import { FillDataDto } from "../dtos/fill-data.dto";

class FormService {
  async createUser(data: CreateUserDto) {
    return prisma.user.create({
      data,
    });
  }

  async createUserRecord(title: string, data: FillDataDto) {
    console.log(title);
    return prisma.formData.create({
      data: {
        uniqueId: data.uniqueId,
        title: title,
        isGraduated: data.ifGraduated,
        name: data.name,
        email: data.email,
        number: data.number,
      },
    });
  }

  async getAllUserRecord(title: string) {
    return prisma.formData.findMany({
      where: { title },
    });
  }
}

export default new FormService();
