interface Manger {
  name: string
}

type TechLead = {
  time: Date
};

type Both = Manger & TechLead;

