import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class TasksService {
  private prisma = new PrismaClient();

  async create(taskData: any, userId: number) {
    return this.prisma.task.create({
      data: {
        ...taskData,
        userId,
      },
    });
  }

  async findAll(userId: number) {
    return this.prisma.task.findMany({
      where: { userId },
    });
  }

  async delete(taskId: number, userId: number) {
    return this.prisma.task.deleteMany({
      where: {
        id: taskId,
        userId,
      },
    });
  }
}
