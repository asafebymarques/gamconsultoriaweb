export class Author {
	constructor(
    readonly name: string,
    readonly image: string,
    readonly designation: string,
  ) {}

  static fromMap(map: object) {
    return new Author(
      map['name'] ?? "",
      map['image'] ?? "",
      map['designation'] ?? ""
    );
  }
};

export class Blog {
	constructor(
		readonly id: number,
	  readonly title: string,
	  readonly paragraph: string,
	  readonly image: string,
	  readonly author: Author,
	  readonly tags: string[],
	  readonly publishDate: Date,
	) {}

  static fromMap(map: object) {
    return new Blog(
      map['id'],
      map['title'] ?? "",
      map['paragraph'] ?? "",
      map['image'] ?? "",
      Author.fromMap(map['author']),
      map['tags'],
      new Date(map['publishDate']),
    );
  }

  getDate() {
    const day = this.publishDate.getDate().toString().padStart(2, '0');
    const monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const month = monthNames[this.publishDate.getMonth()];
    const year = this.publishDate.getFullYear();
    return `${day} de ${month} de ${year}`;
  }
};


