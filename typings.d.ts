type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
};

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface Technology extends Base {
  _type: "skill";
  image: Image;
  title: string;
}

export interface Skill extends Base {
  _type: "skill";
  image: Image;
  title: string;
}

export interface Project extends Base {
  _type: "project";
  image: Image;
  title: string;
  linkToBuild: string;
  summary: string;
  technologies: Technology[];
}

export interface Social extends Base {
  _type: "social";
  title: string;
  url: string;
}
