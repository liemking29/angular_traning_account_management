import Genders from 'src/app/untils/enums/Gender';

export interface AccountInterface {
  id: number;
  account: string;
  name: string;
  dob: string;
  gender: Genders;
  address: string;
  email: string;
  isDeleted: boolean;
}
