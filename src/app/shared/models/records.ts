export class Login{
  name!:string;
  mobile!:number;
  password!:string;
  star!:number;
}

export class Content{
  name!:string;
  amount!:string;
  status!:string;
  overallStatus!:string;
  totalAmount!:string;
  percent!:string;
  rate!:string;
}

export class Product{
  title!:string;
  content!: Content[];
  status!:string;
  amount!:string;
  price!:string;
}
