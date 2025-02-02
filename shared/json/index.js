import {
  HomeIcon,
  PhoneIcon,
  InformationCircleIcon,
  TemplateIcon,
} from "@heroicons/react/outline";
import { FiTwitter, FiInstagram, FiFacebook } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
export const sideList = [
  { name: "Home", icon: HomeIcon, url: "/" },
  { name: "Categories", icon: TemplateIcon, url: "/search" },
  { name: "About", icon: InformationCircleIcon, url: "/about" },
  { name: "Contact", icon: PhoneIcon, url: "/contact" },
];
export const socialLinks = [
  { url: "https://twitter.com/mamad_coder", icon: FiTwitter },
  { url: "https://twitter.com/mamad_coder", icon: FiInstagram },
  { url: "https://twitter.com/mamad_coder", icon: FiFacebook },
  { url: "https://twitter.com/mamad_coder", icon: FaWhatsapp },
];

export const sortView = [
  {
    sort: "relevence",
    name: "relevence",
    arrSorter: (arr) => {
      return arr;
    },
  },
  {
    sort: "sale",
    name: "on sale",
    arrSorter: (arr) => {
      return arr.filter((item) => item.sale === true);
    },
  },
  {
    sort: "latest",
    name: "latest arivals",
    arrSorter: (arr) => {
      return arr.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    },
  },
  {
    sort: "price_inc",
    name: "prcie: low to high",
    arrSorter: (arr) => {
      return arr.sort((a, b) => a.price - b.price);
    },
  },
  {
    sort: "price_dec",
    name: "price: high to low",
    arrSorter: (arr) => {
      return arr.sort((a, b) => b.price - a.price);
    },
  },
];

const url = "https://www.shutterstock.com/shutterstock/photos/2233924609/display_1500/stock-vector-short-and-custom-urls-url-shortener-technology-and-generator-scissor-cut-an-address-bar-or-link-2233924609.jpg";

export const bannerImages = [
  {
    name: "cotton hat",
    cat: "hat",
    url: url,
  },
  {
    name: "light weight jacket",
    cat: "jacket",
    url: url,
  },
  {
    name: "vercel t-shirt",
    cat: "t-shirt",
    url: url,
  },
  {
    name: "mask",
    cat: "accessory",
    url: url,
  },
  {
    name: "champion packable jacket",
    cat: "jacket",
    url: url,
  },
  {
    name: "unisex skinny joggers",
    cat: "pants",
    url: url,
  },
  {
    name: "long sleeve shirt",
    cat: "shirt",
    url: url,
  },
  {
    name: "cotton hat",
    cat: "hat",
    url: url,
  },
  {
    name: "light weight jacket",
    cat: "jacket",
    url: url,
  },
  {
    name: "vercel t-shirt",
    cat: "t-shirt",
    url: url,
  },
];

export const refreshToken = { type: "refresh", age: 60 * 60 * 24 * 365 * 5 };// 5years
export const accessToken = { type: "access", age: 7 * 60 }; // 7min
