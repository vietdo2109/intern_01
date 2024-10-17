import { ApiCommon, ApiCreateEdit } from '../types/mediumFormTypes/apiTypes';
import { Schema } from '@schemas/zodSchema';

function formatDate(date: Date) {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are zero-based
  const day = String(date.getUTCDate()).padStart(2, '0');

  // Format the date as 'YYYY-MM-DD'
  return `${year}-${month}-${day}`;
}

export function mapData(data: Schema): ApiCreateEdit {
  const common: ApiCommon = {
    name: data.name,
    email: data.email,
    FEPeriod: [formatDate(new Date(data.FEPeriod[0])), formatDate(new Date(data.FEPeriod[1]))],
    gender: data.gender,
    languages: data.languages,
    salaryRange: [data.salaryRange[0], data.salaryRange[1]],
    skills: data.skills,
    states: data.states,
    isTeacher: data.isTeacher,
    students: data.students || [],
    dob: formatDate(new Date(data.dob)),
  };
  if (data.variant === 'create') {
    return { ...common, variant: data.variant };
  } else {
    return { ...common, variant: data.variant, id: data.id };
  }
}
