import { Injectable } from '@nestjs/common';
import { Patient, Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class PatientRepository {
  constructor(private prisma: PrismaService) {}

  async getPatients(): Promise<Patient[]> {
    return this.prisma.patient.findMany({
      include: {
        address: true,
      },
    });
  }

  async getPatientById(patientId: number): Promise<
    Prisma.PatientGetPayload<{
      include: {
        address: true;
      };
    }>
  > {
    return this.prisma.patient.findUnique({
      where: {
        id: patientId,
      },
      include: {
        address: true,
      },
    });
  }

  async createPatient(data): Promise<Patient> {
    return this.prisma.patient.create({
      data: {
        ...data,
        address: {
          create: {
            ...data.address,
          },
        },
      },
    });
  }

  async updatePatient(patientId: number, data): Promise<Patient> {
    return this.prisma.patient.update({
      where: {
        id: patientId,
      },
      data: {
        ...data,
        address: {
          update: {
            ...data.address,
          },
        },
      },
    });
  }

  async deletePatientById(patientId: number): Promise<Patient> {
    return this.prisma.patient.delete({
      where: {
        id: patientId,
      },
    });
  }
}
