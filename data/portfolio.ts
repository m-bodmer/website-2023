export interface PortfolioItem {
  id: number;
  title: string;
  imageUrl: string;
  year: number;
  highlights: string[];
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Gamechanger",
    imageUrl: "/images/portfolio/gc.png",
    year: 2023,
    highlights: [
      "Increased user engagement by 25% through intuitive navigation.",
      "Reduced cart abandonment rate by 15% with streamlined checkout.",
      "Received positive feedback on modern look and feel."
    ]
  },
  {
    id: 2,
    title: "Underline Infrastructure",
    imageUrl: "/images/portfolio/underline.png",
    year: 2022,
    highlights: [
      "Increased user engagement by 25% through intuitive navigation.",
      "Reduced cart abandonment rate by 15% with streamlined checkout.",
      "Received positive feedback on modern look and feel."
    ]
  },
  {
    id: 3,
    title: "Cloudflare",
    imageUrl: "/images/portfolio/cloudflare.png",
    year: 2020,
    highlights: [
      "Increased user engagement by 25% through intuitive navigation.",
      "Reduced cart abandonment rate by 15% with streamlined checkout.",
      "Received positive feedback on modern look and feel."
    ]
  },
  {
    id: 4,
    title: "Teehan+Lax",
    imageUrl: "/images/portfolio/teehanlax.png",
    year: 2019,
    highlights: [
      "Increased user engagement by 25% through intuitive navigation.",
      "Reduced cart abandonment rate by 15% with streamlined checkout.",
      "Received positive feedback on modern look and feel."
    ]
  },
  {
    id: 5,
    title: "500px",
    imageUrl: "/images/portfolio/500px.png",
    year: 2018,
    highlights: [
      "Increased user engagement by 25% through intuitive navigation.",
      "Reduced cart abandonment rate by 15% with streamlined checkout.",
      "Received positive feedback on modern look and feel."
    ]
  }
];