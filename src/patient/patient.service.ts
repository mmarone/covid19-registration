import { HttpException, Injectable, HttpStatus } from '@nestjs/common';
import { PatientRepository } from './patient.repository';

@Injectable()
export class PatientService {
  constructor(private repository: PatientRepository) {}

  async getPatients() {
    const patients = this.repository.getPatients();

    return patients;
  }

  async getPatientById(patientId: string) {
    try {
      const patient = this.repository.getPatientById(parseInt(patientId));

      return patient;
    } catch (error) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
  }

  async createPatient(data) {
    const patient = await this.repository.createPatient(data);

    return patient;
  }

  async updatePatient(patientId: string, data) {
    const patient = await this.repository.updatePatient(
      parseInt(patientId),
      data,
    );

    return patient;
  }

  async deletePatientById(patientId: string) {
    try {
      const patient = await this.repository.deletePatientById(
        parseInt(patientId),
      );

      return patient;
    } catch (error) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
  }
}
