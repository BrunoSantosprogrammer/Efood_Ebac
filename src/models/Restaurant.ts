class Restaurant {
  category: string
  title: string
  assessment: number
  description: string
  Image: string
  id: number
  path: string

  constructor(
    category: string,
    title: string,
    assessment: number,
    description: string,
    Image: string,
    id: number,
    path: string
  ) {
    this.category = category
    this.title = title
    this.assessment = assessment
    this.description = description
    this.Image = Image
    this.id = id
    this.path = path
  }
}

export default Restaurant
