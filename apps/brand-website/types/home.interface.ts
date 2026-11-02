export interface HomeCMS {
  data: Data;
}
export interface Data {
  id: number;
  attributes: Attributes;
}
export interface Attributes {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  slug: string;
  seo: Seo;
  sections?: SectionsEntity[] | null;
}
export interface Seo {
  id: number;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  metaRobots: string;
  structuredData: StructuredData;
  metaViewport: string;
  canonicalURL: string;
  metaImage: MetaImageOrImageOrLogoOrMedia;
  metaSocial?: null[] | null;
}
export interface StructuredData {
  '@context': string;
  ' @type': string;
  url: string;
  logo: string;
  sameAs?: string[] | null;
}
export interface MetaImageOrImageOrLogoOrMedia {
  data: DataOrDataEntity;
}
export interface DataOrDataEntity {
  id: number;
  attributes: Attributes1;
}
export interface Attributes1 {
  name: string;
  alternativeText?: null;
  caption?: null;
  width: number;
  height: number;
  formats?: null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: null;
  provider: string;
  provider_metadata?: null;
  createdAt: string;
  updatedAt: string;
}
export interface SectionsEntity {
  id: number;
  __component: string;
  keyword?: KeywordEntity[] | null | string;
  slider?: SliderEntity[] | null;
  items?: ItemsEntity[] | null;
  label1?: string | null;
  label2?: string | null;
  keytext?: string | null;
  label3?: string | null;
  label4?: string | null;
  description?: string | null;
  testimonial?: TestimonialEntity[] | null;
  title?: string | null;
  images?: ImagesEntity[] | null;
  titleStart?: string | null;
  titleEnd?: string | null;
  overviewItem?: OverviewItemEntity[] | null;
  features?: (OverviewItemEntity | BongaOverviewItemsEntity)[] | null;
  media?: Media | null;
  BongaOverviewItems?: BongaOverviewItemsEntity[] | null;
  buttonLabel1?: string | null;
  buttonLabel2?: string | null;
  buttonLink2?: string | null;
  backgroundColor?: string | null;
  buttonLink1?: string | null;
}
export interface KeywordEntity {
  id: number;
  label: string;
}
export interface SliderEntity {
  id: number;
  title1: string;
  keyword1: string;
  description1: string;
  buttonLink1: string;
  buttonLabel1: string;
  buttonLink2: string;
  buttonLabel2: string;
  title2: string;
  keyword2: string;
  description2: string;
  buttonLink3: string;
  buttonLabel3: string;
  buttonLink4: string;
  buttonLabel4: string;
  image: Image;
}
export interface Image {
  data: Data1;
}
export interface Data1 {
  id: number;
  attributes: Attributes2;
}
export interface Attributes2 {
  name: string;
  alternativeText?: null;
  caption?: null;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: null;
  provider: string;
  provider_metadata?: null;
  createdAt: string;
  updatedAt: string;
}
export interface Formats {
  thumbnail: ThumbnailOrSmallOrMediumOrLarge;
  small?: ThumbnailOrSmallOrMediumOrLarge1 | null;
}
export interface ThumbnailOrSmallOrMediumOrLarge {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path?: null;
  width: number;
  height: number;
  size: number;
  url: string;
}
export interface ThumbnailOrSmallOrMediumOrLarge1 {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path?: null;
  width: number;
  height: number;
  size: number;
  url: string;
}
export interface ItemsEntity {
  id: number;
  title: string;
  label1: string;
  link1: string;
  label2: string;
  link2: string;
  description: string;
  image: MetaImageOrImageOrLogoOrMedia;
}
export interface TestimonialEntity {
  id: number;
  description: string;
  organizationName: string;
  logo: Logo;
}
export interface Logo {
  data?: Data2 | null;
}
export interface Data2 {
  id: number;
  attributes: Attributes3;
}
export interface Attributes3 {
  name: string;
  alternativeText?: null;
  caption?: null;
  width: number;
  height: number;
  formats?: Formats1 | null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: null;
  provider: string;
  provider_metadata?: null;
  createdAt: string;
  updatedAt: string;
}
export interface Formats1 {
  thumbnail: ThumbnailOrSmallOrMediumOrLarge;
}
export interface ImagesEntity {
  id: number;
  image: Image1;
}
export interface Image1 {
  data?: DataOrDataEntity[] | null;
}
export interface OverviewItemEntity {
  id: number;
  title: string;
  description: string;
  logo?: MetaImageOrImageOrLogoOrMedia | null;
}
export interface Media {
  data: Data3;
}
export interface Data3 {
  id: number;
  attributes: Attributes4;
}
export interface Attributes4 {
  name: string;
  alternativeText?: null;
  caption?: null;
  width: number;
  height: number;
  formats?: Formats2 | null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: null;
  provider: string;
  provider_metadata?: null;
  createdAt: string;
  updatedAt: string;
}
export interface Formats2 {
  thumbnail: ThumbnailOrSmallOrMediumOrLarge;
  small: ThumbnailOrSmallOrMediumOrLarge;
  medium: ThumbnailOrSmallOrMediumOrLarge;
  large: ThumbnailOrSmallOrMediumOrLarge;
}
export interface BongaOverviewItemsEntity {
  id: number;
  title: string;
  description: string;
  btnLabel?: string | null;
  btnLink?: string | null;
  logo?: MetaImageOrImageOrLogoOrMedia | null;
}
