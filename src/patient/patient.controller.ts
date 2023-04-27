import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { PatientService } from './patient.service';
import { PatientDto } from './dto/patient.dto';

@Controller('patients')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Get()
  getPatients() {
    return this.patientService.getPatients();
  }

  @Get(':patientId')
  getPatientById(@Param('patientId') patientId: string) {
    return this.patientService.getPatientById(patientId);
  }

  @Post()
  createPatient(@Body() body: PatientDto) {
    return this.patientService.createPatient(body);
  }

  @Put(':patientId')
  updatePatient(
    @Param('patientId') patientId: string,
    @Body() body: PatientDto,
  ) {
    return this.patientService.updatePatient(patientId, body);
  }

  @Delete(':patientId')
  deletePatient(@Param('patientId') patientId: string) {
    return this.patientService.deletePatientById(patientId);
  }
}
