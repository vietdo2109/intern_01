import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Option } from '../../types/mediumFormTypes/option';
import { ApiGet } from '../../types/mediumFormTypes/apiTypes';
import { Schema } from '../../schemas/zodSchema';

export function useStates() {
  return useQuery({
    queryKey: ['states'],
    queryFn: () => axios.get<Option[]>('http://localhost:8080/states').then((res) => res.data),
  });
}

export function useLanguages() {
  return useQuery({
    queryKey: ['languages'],
    queryFn: () => axios.get<Option[]>('http://localhost:8080/languages').then((res) => res.data),
  });
}

export function useGenders() {
  return useQuery({
    queryKey: ['genders'],
    queryFn: () => axios.get<Option[]>('http://localhost:8080/genders').then((res) => res.data),
  });
}

export function useSkills() {
  return useQuery({
    queryKey: ['skills'],
    queryFn: () => axios.get<Option[]>('http://localhost:8080/skills').then((res) => res.data),
  });
}
export function useUsers() {
  return useQuery({
    queryKey: ['users'],
    queryFn: () =>
      axios.get<ApiGet[]>('http://localhost:8080/users').then((res) =>
        res.data.map(
          (user) =>
            ({
              id: user.id,
              label: user.name,
            } satisfies Option),
        ),
      ),
  });
}

export function useUser(id: number) {
  return useQuery({
    queryKey: ['user', { id }],
    queryFn: async (): Promise<Schema> => {
      const { data } = await axios.get<ApiGet>(`http://localhost:8080/users/${id}`);

      return {
        variant: 'edit',
        id: data.id,
        name: data.name,
        email: data.email,
        FEPeriod: [formatDate(new Date(data.FEPeriod[0])), formatDate(new Date(data.FEPeriod[1]))],
        gender: data.gender,
        languages: data.languages,
        salaryRange: [data.salaryRange[0], data.salaryRange[1]],
        skills: data.skills,
        states: data.states,
        isTeacher: data.isTeacher,
        students: data.students,
        dob: formatDate(new Date(data.dob)),
      };
    },
    enabled: !!id,
  });
}

function formatDate(date: Date) {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are zero-based
  const day = String(date.getUTCDate()).padStart(2, '0');

  // Format the date as 'YYYY-MM-DD'
  return `${year}-${month}-${day}`;
}
