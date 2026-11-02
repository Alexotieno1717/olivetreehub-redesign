export interface ISectionTestimonial {
  id: string;
  label: string;
  label2: string;
  label3: string;
  label4: string;
  label5: string;
  data: Array<Testimonial>;
}

export type Testimonial = {
  id: string;
  companyName: string;
  representative: string;
  image: string;
  testimonial: string;
};

export interface ILandingHero {
  id: string | number;
  keywords: Array<string>;
  data: Array<ProductAd>;
}

export type Top = {
  id: string | number;
  title: string;
  keyword: string;
  description: string;
  buttonLabel1: string;
  buttonLabel2: string;
  buttonLink1: string;
  buttonLink2: string;
};
export type Bottom = {
  id: string | number;
  title: string;
  keyword: string;
  description: string;
  buttonLabel1: string;
  buttonLabel2: string;
  buttonLink1: string;
  buttonLink2: string;
  img: string;
};
export type ProductAd = {
  top: Top;
  bottom: Bottom;
};

export interface IPartners {
  id: string;
  data: Array<partnersSection>;
}

export type partnersSection = {
  top: Array<partner>;
  bottom: Array<partner>;
};

type partner = {
  id: string;
  name: string;
  img: string;
  link: string;
};

export interface ILicensors {
  id: string;
  data: Array<Licensor>;
}

type Licensor = {
  id: string;
  name: string;
  img: string;
  link: string;
};

export type CallToAction = {
  id: string;
  title: string;
  descriptionStart: string;
  keyword: string;
  descriptionEnd: string;
  buttonLabel1: string;
  buttonLabel2: string;
  buttonLink1: string;
  buttonLink2: string;
  img: string;
};
export interface ICallToActionHero {
  id: string;
  data: CallToAction;
}

export type ProductBrief = {
  id: string;
  title: string;
  description: string;
  buttonLabel1: string;
  buttonLabel2: string;
  buttonLink1: string;
  buttonLink2: string;
  logoImg: string;
};

export interface IProductsSlider {
  id: string;
  data: Array<ProductBrief>;
}

export interface IProductOverview {
  id: string;
  data: {
    title: string;
    description: string;
    productImg: string;
    features: Array<ProductFeature>;
  };
}

export type ProductFeature = {
  id: string;
  title: string;
  description: string;
  buttonLabel: string;
  buttonLink: string;
  logoImg: string;
};

export type ProductFeatureAbout = Pick<ProductFeature, 'id' | 'title' | 'description' | 'logoImg'>;

export interface IAbout {
  id: string;
  data: {
    titleStart: string;
    keyword: string;
    titleEnd: string;
    description: string;
    features: Array<ProductFeatureAbout>;
  };
}

type Links = {
  id: string;
  title: string;
  link: string;
  iconImg?: string;
};
export type Footer = {
  premise: string;
  address: string;
  location: string;
  emailLabel: string;
  emails: Array<string>;
  phoneLabel: string;
  phone: Array<string>;
  socialMedia: Array<Links>;
  links: Array<Links>;
};
export interface IFooter {
  id: string;
  data: Footer;
}

export type Feature = Pick<ProductFeature, 'id' | 'title'>;

export type Product = {
  id: string;
  img: string;
  title: string;
  description: string;
  features?: Array<Feature>;
  active: boolean;
};

export interface IProducts {
  id: string;
  data: Array<Product>;
}

export type FeatureProducts = Pick<ProductFeature, 'id' | 'description' | 'logoImg'>;

export interface IUssdHero {
  id: string;
  img: string;
  title: string;
  description: string;
  buttonLabel: string;
  buttonLink: string;
  overview: {
    title: string;
    description: string;
    features: Array<FeatureProducts>;
  };
}

export interface ILandingHeroProducts extends IUssdHero {
  id: string;
  title: string;
  description: string;
}

export interface IBongasmsHero extends IUssdHero {
  titleStart: string;
  titleEnd: string;
  callToAction: {
    titleStart: string;
    keyword: string;
    titleEnd: string;
    description: string;
  };
}

type callToActionButtons = {
  buttonLabel1: string;
  buttonLabel2: string;
  buttonLink1: string;
  buttonLink2: string;
};

export type singleProductFeature = Pick<ProductFeature, 'id' | 'description' | 'logoImg'>;

type colors = {
  color1: string;
  color2: string;
  color3: string;
};
export type singleProductCTA = {
  title: string;
  description: string;
  img: string;
  color: string;
  sphere1Colors: {
    color1: string;
    color2: string;
    color3: string;
  };
  sphere2Colors: {
    color1: string;
    color2: string;
    color3: string;
  };
  side: 'right' | 'left';
};

type option = {
  title: string;
  img: string;
  features: Array<{
    id: string;
    title?: string;
    description: string;
  }>;
};
export interface IProductSingleHero extends callToActionButtons {
  title: string;
  keyword: string;
  description: string;
  options: Array<option>;
  bgColor: string;
  keyWordColor: string;
  buttonColor: string;
  dividerColor: string;
}
export type listItem = {
  id: string;
  description: string;
};
export interface singleProductScreen {
  landingHero: IProductSingleHero;
  features: Array<singleProductFeature>;
  callToAction: singleProductCTA;
  howItWorks?: {
    color?: string;
    items: Array<listItem>;
  };
  benefits: {
    color: string;
    listIcon: string;
    items: Array<listItem>;
  };
  callToAction2: {
    bgColor: string;
    keywordColor: string;
    sphereBottom: {
      color1: string;
      color2: string;
      color3: string;
    };
    sphereFront: {
      color1: string;
      color2: string;
      color3: string;
    };
    sphereBack: {
      color1: string;
      color2: string;
      color3: string;
    };
  };
}



export interface AboutScreen {
  landingHero: IProductSingleHero;
  ideaMore: Array<singleProductFeature>;
  ourJourney: Array<journey>;
  faceMore: Array<ourTeam>;
}

export type journey = {
  id: number;
  year: number;
  title: string;
  img: string;
  description1: string;
  description2?: string;
};

export type ourTeam = {
  id: number;
  name: string;
  title: string;
  img: string;
};

export interface ArticleCMS {
  id: number;
  attributes: Attributes;
}
export interface Attributes {
  title: string;
  slug: string;
  subtitle: string;
  excerpt: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  publishedOn: string;
  image: Image;
  categories: Categories;
  seo: Seo;
}
export interface Image {
  data: Data;
}
export interface Data {
  id: number;
  attributes: Attributes1;
}
export interface Attributes1 {
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
  thumbnail: Thumbnail;
}
export interface Thumbnail {
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

export interface Category {
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
export interface CategoryData {
  id: number;
  attributes: Category;
}
export interface Categories {
  data?: (CategoryData)[] | null;

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
  metaImage: MetaImage;
  metaSocial?: null[] | null;
}
export interface StructuredData {
  '@context': string;
  '@type': string;
  url: string;
  logo: string;
  sameAs?: string[] | null;
}
export interface MetaImage {
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
  //formats?: null;
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

// START ABOUT  US TYPES
export interface AboutUsCMS {
  data: DataAbout;
}

export interface DataAbout {
  id: number;
  attributes: Attributes0001;
}

export interface Attributes0001 {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  slug: string;
  seo: Seo;
  sections?: SectionsEntity[] | null;
}

export interface SectionsEntity {
  id: number;
  __component: string;
  title: string;
  keyword?: string | null;
  description?: string | null;
  buttonLabel1?: string | null;
  buttonLink1?: string | null;
  buttonLabel2?: string | null;
  buttonLink2?: string | null;
  title2?: string | null;
  description2?: string | null;
  optionColumns?: OptionColumnsEntity[] | null;
  ideaofmore?: IdeaofmoreEntity[] | null;
  slides?: SlidesEntity[] | null;
  members?: MembersEntity[] | null;
}

export interface OptionColumnsEntity {
  id: number;
  title: string;
  description: string;
}
export interface IdeaofmoreEntity {
  id: number;
  description: string;
  image: Image;
}

export interface Image {
  data: Data;
}

export interface DataImg {
  id: number;
  attributes: AttributesDataImg;
}

export interface AttributesDataImg {
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
  thumbnail: ThumbnailOrSmallOrMedium;
}

export interface ThumbnailOrSmallOrMedium {
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
export interface SlidesEntity {
  id: number;
  year: string;
  caption: string;
  description1: string;
  description2?: string | null;
  image: SlidesEntityImage1;
}
export interface SlidesEntityImage1 {
  data: SlidesEntityData;
}
export interface SlidesEntityData {
  id: number;
  attributes: SlidesEntityDataAttributes;
}

export interface SlidesEntityDataAttributes {
  name: string;
  alternativeText?: null;
  caption?: null;
  width: number;
  height: number;
  formats: Formats01;
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

export interface Formats01 {
  thumbnail: ThumbnailOrSmallOrMedium;
  small?: ThumbnailOrSmallOrMedium1 | null;
  medium?: ThumbnailOrSmallOrMedium1 | null;
}

export interface ThumbnailOrSmallOrMedium1 {
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

export interface MembersEntity {
  id: number;
  name: string;
  title: string;
  image: MembersEntityImage2;
}
export interface MembersEntityImage2 {
  data: Data4;
}
export interface Data4 {
  id: number;
  attributes: MembersEntityAttributes;
}
export interface MembersEntityAttributes {
  name: string;
  alternativeText?: null;
  caption?: null;
  width: number;
  height: number;
  formats: Formats02;
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

export interface Formats02 {
  thumbnail: ThumbnailOrSmallOrMedium;
  small: ThumbnailOrSmallOrMedium;
}

//  END OF ABOUT TYPES

export interface Products {
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
  sections: (SectionsEntity)[] ;
}

export interface MetaImageOrImage {
  data: Data;
}
export interface Data {
  id: number;
  attributes: Attributes1;
}
export interface Attributes1 {
  name: string;
  alternativeText?: null;
  caption?: null;
  width: number;
  height: number;
  //formats?: null;
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
  Title?: string | null;
  keyword?: string | null;
  description?: string | null;
  bgColor?: string | null;
  productTitleStart?: string | null;
  productTitleEnd?: string | null;
  productDescription?: string | null;
  buttonBackgroundColor?: string | null;
  buttonLabel?: string | null;
  buttonTextColor?: string | null;
  productSubtitle?: string | null;
  productSubDescription?: string | null;
  productImage?: ProductImage | null;
  productFeatures?: (ProductFeaturesEntity)[] | null;
  sphereColor?: SphereColorOrSphere1ColorsOrSphere2ColorsOrSphere3Colors | null;
  productTitle?: string | null;
  productSubTitle?: string | null;
  divideColor?: string | null;
  CallToActionStart?: string | null;
  CallToActionMiddle?: string | null;
  callToActionEnd?: string | null;
  callToActionDescription?: string | null;
  backgroundColor?: string | null;
  sphere1Colors?: SphereColorOrSphere1ColorsOrSphere2ColorsOrSphere3Colors1 | null;
  sphere2Colors?: SphereColorOrSphere1ColorsOrSphere2ColorsOrSphere3Colors2 | null;
  sphere3Colors?: SphereColorOrSphere1ColorsOrSphere2ColorsOrSphere3Colors3 | null;
  productQuatenary: (ProductQuatenaryEntity)[];
}
export interface ProductImage {
  data?: Data1 | null;
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
export interface Formats2 {
  thumbnail: ThumbnailOrSmall;
  small: ThumbnailOrSmall;
}
export interface ThumbnailOrSmall {
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
export interface ProductFeaturesEntity {
  id: number;
  description: string;
  image: MetaImageOrImage;
}
export interface SphereColorOrSphere1ColorsOrSphere2ColorsOrSphere3Colors {
  id: number;
  color1: string;
  color2: string;
  color3: string;
}
export interface SphereColorOrSphere1ColorsOrSphere2ColorsOrSphere3Colors1 {
  id: number;
  color1: string;
  color2: string;
  color3: string;
}
export interface SphereColorOrSphere1ColorsOrSphere2ColorsOrSphere3Colors2 {
  id: number;
  color1: string;
  color2: string;
  color3: string;
}
export interface SphereColorOrSphere1ColorsOrSphere2ColorsOrSphere3Colors3 {
  id: number;
  color1: string;
  color2: string;
  color3: string;
}
export interface ProductQuatenaryEntity {
  id: number;
  productTitle: string;
  productDescription: string;
  backgroundColor?: string | null;
  productFeatures?: string;
  active: boolean;
  productImage: ProductImage1;
}
export interface ProductImage1 {
  data: Data2;
}
export interface Data2 {
  id: number;
  attributes: Attributes2;
}

export interface ProductPage {
  id: number;
  attributes: AttributesProductPage;
}
export interface AttributesProductPage {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  slug: string;
  seo: Seo;
  sections: (SectionsEntityProductPage)[];
}

export interface SectionsEntityProductPage {
  id: number;
  __component: string;
  backgroundColor: string;
  title?: string | null;
  keyword?: string | null;
  keywordColor: string;
  buttonBackgroundColor: string;
  dividerColor: string;
  buttonLabel1?: string | null;
  buttonLabel2?: string | null;
  buttonLink1: string;
  buttonLink2: string;
  option1?: string | null;
  option2?: null;
  columns: (ColumnsEntity)[];
  features: (FeaturesEntity)[];
  description: string;
  sideRight?: boolean | null;
  image?: Image | null;
  sphereColors: (SphereColorsEntityOrSphereBottomOrSphereFrontOrSphereBack)[] ;
  color?: string | null;
  instructions: (InstructionsEntityOrBenefitsEntity)[];
  litIcon: MetaImageOrImageOrLitIcon1;
  benefits: (InstructionsEntityOrBenefitsEntity)[];
  sphereBottom: SphereColorsEntityOrSphereBottomOrSphereFrontOrSphereBack1;
  sphereFront: SphereColorsEntityOrSphereBottomOrSphereFrontOrSphereBack2;
  sphereBack: SphereColorsEntityOrSphereBottomOrSphereFrontOrSphereBack3;
}
export interface ColumnsEntity {
  id: number;
  title: string;
  columnLists: (ColumnListsEntity)[];
  image: Image1;
}
export interface ColumnListsEntity {
  id: number;
  title?: string | null;
  description: string;
}
export interface Image1 {
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
  thumbnail: Thumbnail;
}
export interface Thumbnail {
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
export interface FeaturesEntity {
  id: number;
  description: string;
  image: MetaImage;
}
export interface Image {
  data: Data1;
}
export interface SphereColorsEntityOrSphereBottomOrSphereFrontOrSphereBack {
  id: number;
  color1: string;
  color2: string;
  color3: string;
}
export interface InstructionsEntityOrBenefitsEntity {
  id: number;
  description: string;
}
export interface MetaImageOrImageOrLitIcon1 {
  data: Data;
}
export interface SphereColorsEntityOrSphereBottomOrSphereFrontOrSphereBack1 {
  id: number;
  color1: string;
  color2: string;
  color3: string;
}
export interface SphereColorsEntityOrSphereBottomOrSphereFrontOrSphereBack2 {
  id: number;
  color1: string;
  color2: string;
  color3: string;
}
export interface SphereColorsEntityOrSphereBottomOrSphereFrontOrSphereBack3 {
  id: number;
  color1: string;
  color2: string;
  color3: string;
}


export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  total:     number;
  page:      number;
  pageSize:  number;
  pageCount: number;
}

