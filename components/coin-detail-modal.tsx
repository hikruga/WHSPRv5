"use client"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useEffect, useRef, useState } from "react"
import { TokenChart } from "@/components/token-chart"

interface CoinHolder {
  name: string;
  address: string;
  balance: string;
  value: string;
  percentage: string;
}

interface CoinData {
  name: string;
  symbol: string;
  price: string;
  priceChange: string;
  marketCap: string;
  volume: string;
  buys: number;
  sells: number;
  totalHolders: number;
  smartWallets: {
    count: number;
    holders: CoinHolder[];
  };
  concentration: {
    smartWallets: string;
    liquidityPools: string;
    regularHolders: string;
    top5: string;
    top10: string;
    top20: string;
    top50: string;
  };
  narrativeScore: string;
  metrics: {
    virality: string;
    originality: string;
    timeliness: string;
    memePotential: string;
    spreadFactors: string[];
    viralSpeed: string;
    barriers: string[];
  };
  description: string;
  contract: string;
  tags: string[];
  memeticAnalysis: {
    viralSpeed: string;
    barriers: string[];
  };
  culturalReferences: {
    experimental: string;
    defi: string;
    internetCulture: string;
  };
}

interface CoinDatabase {
  [key: string]: CoinData;
}

interface CoinDetailModalProps {
  isOpen: boolean
  onClose: () => void
  coinSymbol: string
}

export function CoinDetailModal({ isOpen, onClose, coinSymbol }: CoinDetailModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Scroll to top when modal opens
  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.scrollTop = 0;
    }
  }, [isOpen, coinSymbol]);

  // Replace the coinData object with this dynamic function
  const getCoinData = (symbol: string) => {
    const coinDatabase: CoinDatabase = {
      DOGE: {
        name: "Dogecoin",
        symbol: "DOGE",
        price: "$0.11218",
        priceChange: "+12.77%",
        marketCap: "$15.4B",
        volume: "$1.2B",
        buys: 1247,
        sells: 982,
        totalHolders: 4842,
        smartWallets: {
          count: 842,
          holders: [
            {
              name: "Whale",
              address: "0x89B5...",
              balance: "1.2B DOGE",
              value: "$134M",
              percentage: "2.47%",
            },
            {
              name: "DeepPocket",
              address: "0x7A3C...",
              balance: "890M DOGE",
              value: "$99.8M",
              percentage: "1.83%",
            },
            {
              name: "CryptoKing",
              address: "0x4F2E...",
              balance: "650M DOGE",
              value: "$72.9M",
              percentage: "1.34%",
            },
            {
              name: "DiamondHands",
              address: "0x9B8A...",
              balance: "420M DOGE",
              value: "$47.1M",
              percentage: "0.86%",
            },
            {
              name: "MoonShot",
              address: "0x6D5C...",
              balance: "380M DOGE",
              value: "$42.6M",
              percentage: "0.78%",
            },
          ],
        },
        concentration: {
          smartWallets: "8.45%",
          liquidityPools: "20.33%",
          regularHolders: "71.22%",
          top5: "14.85%",
          top10: "23.17%",
          top20: "36.68%",
          top50: "60.76%",
        },
        narrativeScore: "7/10",
        metrics: {
          virality: "6/10",
          originality: "8/10",
          timeliness: "5/10",
          memePotential: "9/10",
          spreadFactors: ["High", "Medium", "High"],
          viralSpeed: "High",
          barriers: ["Market saturation", "Meme longevity"],
        },
        description:
          "Dogecoin (DOGE) embodies the fusion of internet meme culture with cryptocurrency, featuring a Shiba Inu dog as its mascot. It aims to capture the crypto community with humor and a unique aesthetic, highlighting the potential for virality amidst challenges in market sustainability.",
        contract: "0x1a2b3c...7890d",
        tags: ["Meme", "OG Meme Coin"],
        memeticAnalysis: {
          viralSpeed: "High",
          barriers: ["Market saturation", "Meme longevity"],
        },
        culturalReferences: {
          experimental: "No",
          defi: "No",
          internetCulture: "Yes",
        },
      },
      SHIB: {
        name: "Shiba Inu",
        symbol: "SHIB",
        price: "$0.000024",
        priceChange: "+8.45%",
        marketCap: "$14.2B",
        volume: "$890M",
        buys: 1100,
        sells: 900,
        totalHolders: 1234567,
        smartWallets: {
          count: 1205,
          holders: [
            {
              name: "ShibArmyLeader",
              address: "0x45A7...",
              balance: "15T SHIB",
              value: "$360M",
              percentage: "1.22%",
            },
            {
              name: "BoneCollector",
              address: "0x9B2D...",
              balance: "10T SHIB",
              value: "$240M",
              percentage: "0.81%",
            },
            {
              name: "LeashHolder",
              address: "0x6E8F...",
              balance: "7.5T SHIB",
              value: "$180M",
              percentage: "0.61%",
            },
            {
              name: "TreatLover",
              address: "0x2C5A...",
              balance: "5T SHIB",
              value: "$120M",
              percentage: "0.41%",
            },
            {
              name: "BarkingMad",
              address: "0x7F1B...",
              balance: "3T SHIB",
              value: "$72M",
              percentage: "0.24%",
            },
          ],
        },
        concentration: {
          smartWallets: "12.34%",
          liquidityPools: "18.76%",
          regularHolders: "68.90%",
          top5: "22.45%",
          top10: "31.67%",
          top20: "45.23%",
          top50: "67.89%",
        },
        narrativeScore: "8/10",
        metrics: {
          virality: "9/10",
          originality: "6/10",
          timeliness: "7/10",
          memePotential: "9/10",
          spreadFactors: ["Very High", "High", "Medium"],
          viralSpeed: "Very High",
          barriers: ["High supply", "Competition"],
        },
        description:
          "Shiba Inu (SHIB) is a decentralized meme token that grew into a vibrant ecosystem. The SHIB Army has built one of the strongest communities in crypto, driving adoption through social media campaigns and ecosystem development including ShibaSwap DEX.",
        contract: "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE",
        tags: ["Meme", "Ecosystem"],
        memeticAnalysis: {
          viralSpeed: "Very High",
          barriers: ["High supply", "Competition"],
        },
        culturalReferences: {
          experimental: "No",
          defi: "No",
          internetCulture: "Yes",
        },
      },
      PEPE: {
        name: "Pepe",
        symbol: "PEPE",
        price: "$0.000018",
        priceChange: "+15.23%",
        marketCap: "$7.8B",
        volume: "$2.1B",
        buys: 1500,
        sells: 1030,
        totalHolders: 234567,
        smartWallets: {
          count: 567,
          holders: [
            {
              name: "PepeTheGreat",
              address: "0x78B9...",
              balance: "80T PEPE",
              value: "$1.44M",
              percentage: "0.61%",
            },
            {
              name: "FrogKing",
              address: "0x3C1A...",
              balance: "60T PEPE",
              value: "$1.08M",
              percentage: "0.46%",
            },
            {
              name: "GreenSkin",
              address: "0x5F4D...",
              balance: "45T PEPE",
              value: "$810K",
              percentage: "0.34%",
            },
            {
              name: "MemeLord",
              address: "0x1A9E...",
              balance: "30T PEPE",
              value: "$540K",
              percentage: "0.23%",
            },
            {
              name: "RibbitRich",
              address: "0x8D6C...",
              balance: "20T PEPE",
              value: "$360K",
              percentage: "0.15%",
            },
          ],
        },
        concentration: {
          smartWallets: "15.67%",
          liquidityPools: "25.43%",
          regularHolders: "58.90%",
          top5: "28.34%",
          top10: "39.12%",
          top20: "52.78%",
          top50: "71.23%",
        },
        narrativeScore: "9/10",
        metrics: {
          virality: "10/10",
          originality: "9/10",
          timeliness: "8/10",
          memePotential: "10/10",
          spreadFactors: ["Extreme", "Very High", "High"],
          viralSpeed: "Extreme",
          barriers: ["Volatility", "Regulatory risk"],
        },
        description:
          "Pepe (PEPE) is the ultimate meme coin inspired by the iconic Pepe the Frog meme. With explosive viral potential and a dedicated community, PEPE represents the pure essence of internet culture in cryptocurrency form, capturing the zeitgeist of digital rebellion.",
        contract: "0x6982508145454Ce325dDbE47a25d4ec3d2311933",
        tags: ["Meme", "Viral"],
        memeticAnalysis: {
          viralSpeed: "Extreme",
          barriers: ["Volatility", "Regulatory risk"],
        },
        culturalReferences: {
          experimental: "No",
          defi: "No",
          internetCulture: "Yes",
        },
      },
      "pig wif hat": {
        name: "Pig Wif Hat",
        symbol: "PIG",
        price: "$0.0007576",
        priceChange: "+965.56%",
        marketCap: "$75.8M",
        volume: "$45.2M",
        buys: 2500,
        sells: 1060,
        totalHolders: 12456,
        smartWallets: {
          count: 234,
          holders: [
            {
              name: "PiggyBank",
              address: "0x12C4...",
              balance: "20M PIG",
              value: "$15.16K",
              percentage: "1.61%",
            },
            {
              name: "OinkMaster",
              address: "0x5A8B...",
              balance: "15M PIG",
              value: "$11.36K",
              percentage: "1.21%",
            },
            {
              name: "TruffleHunter",
              address: "0x9D2F...",
              balance: "10M PIG",
              value: "$7.58K",
              percentage: "0.81%",
            },
            {
              name: "BaconKing",
              address: "0x4E7C...",
              balance: "7M PIG",
              value: "$5.30K",
              percentage: "0.56%",
            },
            {
              name: "HamHock",
              address: "0x7B3A...",
              balance: "5M PIG",
              value: "$3.79K",
              percentage: "0.40%",
            },
          ],
        },
        concentration: {
          smartWallets: "23.45%",
          liquidityPools: "35.67%",
          regularHolders: "40.88%",
          top5: "45.23%",
          top10: "58.91%",
          top20: "72.34%",
          top50: "89.12%",
        },
        narrativeScore: "6/10",
        metrics: {
          virality: "8/10",
          originality: "7/10",
          timeliness: "9/10",
          memePotential: "8/10",
          spreadFactors: ["High", "High", "Medium"],
          viralSpeed: "High",
          barriers: ["New token", "Low liquidity"],
        },
        description:
          "Pig Wif Hat is a trending meme coin featuring a pig wearing a hat, riding the wave of 'wif hat' meme culture. This playful token has captured attention with its unique branding and community-driven approach, representing the evolution of animal-themed meme coins.",
        contract: "0x9876543210abcdef...",
        tags: ["Meme", "Trending"],
        memeticAnalysis: {
          viralSpeed: "High",
          barriers: ["New token", "Low liquidity"],
        },
        culturalReferences: {
          experimental: "No",
          defi: "No",
          internetCulture: "Yes",
        },
      },
      "TRUMP DOGS": {
        name: "Trump Dogs",
        symbol: "TRUMPDOGS",
        price: "$0.0004463",
        priceChange: "+368.32%",
        marketCap: "$44.6M",
        volume: "$28.9M",
        buys: 1900,
        sells: 1000,
        totalHolders: 8934,
        smartWallets: {
          count: 156,
          holders: [
            {
              name: "TrumpFan",
              address: "0x45F7...",
              balance: "10M TRUMPDOGS",
              value: "$4.46K",
              percentage: "1.12%",
            },
            {
              name: "MAGALover",
              address: "0x2B9C...",
              balance: "7.5M TRUMPDOGS",
              value: "$3.35K",
              percentage: "0.84%",
            },
            {
              name: "PatriotPup",
              address: "0x6D3E...",
              balance: "5M TRUMPDOGS",
              value: "$2.23K",
              percentage: "0.56%",
            },
            {
              name: "USAFirst",
              address: "0x8A1F...",
              balance: "3M TRUMPDOGS",
              value: "$1.34K",
              percentage: "0.34%",
            },
            {
              name: "RedWave",
              address: "0x1C5D...",
              balance: "2M TRUMPDOGS",
              value: "$893",
              percentage: "0.22%",
            },
          ],
        },
        concentration: {
          smartWallets: "18.92%",
          liquidityPools: "28.45%",
          regularHolders: "52.63%",
          top5: "35.67%",
          top10: "48.23%",
          top20: "61.89%",
          top50: "78.45%",
        },
        narrativeScore: "5/10",
        metrics: {
          virality: "7/10",
          originality: "5/10",
          timeliness: "9/10",
          memePotential: "6/10",
          spreadFactors: ["High", "Medium", "Medium"],
          viralSpeed: "High",
          barriers: ["Political sensitivity", "Market volatility"],
        },
        description:
          "Trump Dogs combines political memes with cryptocurrency, featuring dog-themed content related to political figures. This token rides on current events and political sentiment, appealing to supporters who want to express their political views through crypto investments.",
        contract: "0xabcdef1234567890...",
        tags: ["Political", "Meme"],
        memeticAnalysis: {
          viralSpeed: "High",
          barriers: ["Political sensitivity", "Market volatility"],
        },
        culturalReferences: {
          experimental: "No",
          defi: "No",
          internetCulture: "Yes",
        },
      },
      "Trump Dinner": {
        name: "Trump Dinner",
        symbol: "DINNER",
        price: "$0.000318",
        priceChange: "+346.06%",
        marketCap: "$31.8M",
        volume: "$19.7M",
        buys: 1700,
        sells: 1020,
        totalHolders: 6789,
        smartWallets: {
          count: 123,
          holders: [
            {
              name: "DinnerGuest",
              address: "0x89AB...",
              balance: "8M DINNER",
              value: "$2.54K",
              percentage: "1.18%",
            },
            {
              name: "TableTalker",
              address: "0x3C2D...",
              balance: "6M DINNER",
              value: "$1.91K",
              percentage: "0.88%",
            },
            {
              name: "PlatePusher",
              address: "0x5F7E...",
              balance: "4M DINNER",
              value: "$1.27K",
              percentage: "0.59%",
            },
            {
              name: "ForkLifter",
              address: "0x1A4C...",
              balance: "3M DINNER",
              value: "$954",
              percentage: "0.44%",
            },
            {
              name: "NapkinNinja",
              address: "0x7D8B...",
              balance: "2M DINNER",
              value: "$636",
              percentage: "0.29%",
            },
          ],
        },
        concentration: {
          smartWallets: "21.34%",
          liquidityPools: "32.56%",
          regularHolders: "46.10%",
          top5: "38.92%",
          top10: "52.67%",
          top20: "67.23%",
          top50: "83.45%",
        },
        narrativeScore: "4/10",
        metrics: {
          virality: "6/10",
          originality: "4/10",
          timeliness: "8/10",
          memePotential: "5/10",
          spreadFactors: ["Medium", "Medium", "Low"],
          viralSpeed: "Medium",
          barriers: ["Niche appeal", "Limited utility"],
        },
        description:
          "Trump Dinner is a political meme token inspired by dinner events and political gatherings. It represents a specific moment in political culture translated into cryptocurrency form, capitalizing on viral moments and political discourse in the digital age.",
        contract: "0xfedcba0987654321...",
        tags: ["Political", "Event"],
        memeticAnalysis: {
          viralSpeed: "Medium",
          barriers: ["Niche appeal", "Limited utility"],
        },
        culturalReferences: {
          experimental: "No",
          defi: "No",
          internetCulture: "Yes",
        },
      },
      "unstable coin": {
        name: "Unstable Coin",
        symbol: "UNSTABLE",
        price: "$0.000526",
        priceChange: "+36.73%",
        marketCap: "$52.6M",
        volume: "$12.4M",
        buys: 1300,
        sells: 1070,
        totalHolders: 15678,
        smartWallets: {
          count: 289,
          holders: [
            {
              name: "ChaosTrader",
              address: "0x34BC...",
              balance: "15M UNSTABLE",
              value: "$7.89K",
              percentage: "0.96%",
            },
            {
              name: "RogueWave",
              address: "0x5A1D...",
              balance: "12M UNSTABLE",
              value: "$6.31K",
              percentage: "0.77%",
            },
            {
              name: "WildCard",
              address: "0x9D6F...",
              balance: "9M UNSTABLE",
              value: "$4.73K",
              percentage: "0.58%",
            },
            {
              name: "QuakeMaker",
              address: "0x4E9A...",
              balance: "6M UNSTABLE",
              value: "$3.16K",
              percentage: "0.39%",
            },
            {
              name: "RippleEffect",
              address: "0x7B5C...",
              balance: "4M UNSTABLE",
              value: "$2.10K",
              percentage: "0.26%",
            },
          ],
        },
        concentration: {
          smartWallets: "16.78%",
          liquidityPools: "24.56%",
          regularHolders: "58.66%",
          top5: "29.45%",
          top10: "41.23%",
          top20: "56.78%",
          top50: "74.32%",
        },
        narrativeScore: "6/10",
        metrics: {
          virality: "5/10",
          originality: "8/10",
          timeliness: "6/10",
          memePotential: "7/10",
          spreadFactors: ["Medium", "High", "Medium"],
          viralSpeed: "Medium",
          barriers: ["Concept complexity", "Market education needed"],
        },
        description:
          "Unstable Coin embraces volatility as a feature, not a bug. This experimental token challenges traditional stablecoin concepts by celebrating price instability and market chaos, appealing to traders who thrive on unpredictability and high-risk, high-reward scenarios.",
        contract: "0x567890abcdef1234...",
        tags: ["Experimental", "DeFi"],
        memeticAnalysis: {
          viralSpeed: "Medium",
          barriers: ["Concept complexity", "Market education needed"],
        },
        culturalReferences: {
          experimental: "Yes",
          defi: "Yes",
          internetCulture: "No",
        },
      },
      "Pepes Dog": {
        name: "Pepes Dog",
        symbol: "PEPESDOG",
        price: "$0.016",
        priceChange: "-53.37%",
        marketCap: "$16M",
        volume: "$8.9M",
        buys: 800,
        sells: 1100,
        totalHolders: 9876,
        smartWallets: {
          count: 178,
          holders: [
            {
              name: "DogFather",
              address: "0x67DE...",
              balance: "1.5M PEPESDOG",
              value: "$24K",
              percentage: "1.52%",
            },
            {
              name: "WoofMaster",
              address: "0x2C4A...",
              balance: "1.2M PEPESDOG",
              value: "$19.2K",
              percentage: "1.21%",
            },
            {
              name: "TailWagger",
              address: "0x5F9D...",
              balance: "900K PEPESDOG",
              value: "$14.4K",
              percentage: "0.91%",
            },
            {
              name: "FetchKing",
              address: "0x1A6E...",
              balance: "600K PEPESDOG",
              value: "$9.6K",
              percentage: "0.61%",
            },
            {
              name: "BarkAngel",
              address: "0x8D2C...",
              balance: "400K PEPESDOG",
              value: "$6.4K",
              percentage: "0.40%",
            },
          ],
        },
        concentration: {
          smartWallets: "19.87%",
          liquidityPools: "31.45%",
          regularHolders: "48.68%",
          top5: "34.56%",
          top10: "47.89%",
          top20: "62.34%",
          top50: "79.12%",
        },
        narrativeScore: "5/10",
        metrics: {
          virality: "4/10",
          originality: "6/10",
          timeliness: "3/10",
          memePotential: "7/10",
          spreadFactors: ["Low", "Medium", "Medium"],
          viralSpeed: "Low",
          barriers: ["Market downturn", "Competition from PEPE"],
        },
        description:
          "Pepes Dog is a derivative meme token inspired by the popular Pepe meme but featuring a dog character. Despite recent price declines, it maintains a loyal community of dog and meme enthusiasts who believe in the crossover appeal of two beloved internet cultures.",
        contract: "0x234567890abcdef1...",
        tags: ["Meme", "Dog"],
        memeticAnalysis: {
          viralSpeed: "Low",
          barriers: ["Market downturn", "Competition from PEPE"],
        },
        culturalReferences: {
          experimental: "No",
          defi: "No",
          internetCulture: "Yes",
        },
      },
      "Bubblemaps": {
        name: "Bubblemaps",
        symbol: "BUBBLE",
        price: "$0.0000234",
        priceChange: "+12.5%",
        marketCap: "$2.34M",
        volume: "$1.2M",
        buys: 890,
        sells: 450,
        totalHolders: 5678,
        smartWallets: {
          count: 123,
          holders: [
            {
              name: "BubbleMaster",
              address: "0x23A4...",
              balance: "50M BUBBLE",
              value: "$1.17K",
              percentage: "2.14%",
            },
            {
              name: "MapTrader",
              address: "0x7B9C...",
              balance: "35M BUBBLE",
              value: "$819",
              percentage: "1.50%",
            },
            {
              name: "ChartWatcher",
              address: "0x4D2F...",
              balance: "25M BUBBLE",
              value: "$585",
              percentage: "1.07%",
            },
            {
              name: "TrendSpotter",
              address: "0x8E1A...",
              balance: "15M BUBBLE",
              value: "$351",
              percentage: "0.64%",
            },
            {
              name: "PatternFinder",
              address: "0x3C5D...",
              balance: "10M BUBBLE",
              value: "$234",
              percentage: "0.43%",
            }
          ]
        },
        concentration: {
          smartWallets: "15.67%",
          liquidityPools: "25.89%",
          regularHolders: "58.44%",
          top5: "32.78%",
          top10: "45.23%",
          top20: "58.91%",
          top50: "75.34%"
        },
        narrativeScore: "7/10",
        metrics: {
          virality: "6/10",
          originality: "8/10",
          timeliness: "9/10",
          memePotential: "5/10",
          spreadFactors: ["High", "Medium", "Medium"],
          viralSpeed: "Medium",
          barriers: ["Technical complexity", "Market education needed"]
        },
        description: "Bubblemaps is a data visualization tool for tracking token movements and market patterns. It provides unique insights into token distribution and trading patterns, helping traders make more informed decisions.",
        contract: "0x1234567890abcdef...",
        tags: ["Utility", "Data"],
        memeticAnalysis: {
          viralSpeed: "Medium",
          barriers: ["Technical complexity", "Market education needed"],
        },
        culturalReferences: {
          experimental: "No",
          defi: "No",
          internetCulture: "Yes",
        },
      },
      "Launch On Pump": {
        name: "Launch On Pump",
        symbol: "PUMP",
        price: "$0.0000456",
        priceChange: "+18.3%",
        marketCap: "$4.56M",
        volume: "$2.8M",
        buys: 1200,
        sells: 680,
        totalHolders: 7890,
        smartWallets: {
          count: 156,
          holders: [
            {
              name: "PumpMaster",
              address: "0x34B5...",
              balance: "40M PUMP",
              value: "$1.82K",
              percentage: "1.82%",
            },
            {
              name: "LaunchTrader",
              address: "0x6C9D...",
              balance: "30M PUMP",
              value: "$1.37K",
              percentage: "1.37%",
            },
            {
              name: "TokenHunter",
              address: "0x5E2F...",
              balance: "20M PUMP",
              value: "$912",
              percentage: "0.91%",
            },
            {
              name: "EarlyBird",
              address: "0x9A1B...",
              balance: "15M PUMP",
              value: "$684",
              percentage: "0.68%",
            },
            {
              name: "TrendSetter",
              address: "0x2D4C...",
              balance: "10M PUMP",
              value: "$456",
              percentage: "0.46%",
            }
          ]
        },
        concentration: {
          smartWallets: "18.92%",
          liquidityPools: "28.45%",
          regularHolders: "52.63%",
          top5: "35.67%",
          top10: "48.23%",
          top20: "61.89%",
          top50: "78.45%"
        },
        narrativeScore: "8/10",
        metrics: {
          virality: "7/10",
          originality: "9/10",
          timeliness: "8/10",
          memePotential: "6/10",
          spreadFactors: ["High", "High", "Medium"],
          viralSpeed: "High",
          barriers: ["Market timing", "Competition"]
        },
        description: "Launch On Pump is a platform that helps identify and track new token launches with high potential. It provides real-time analytics and insights for traders looking to capitalize on early-stage opportunities.",
        contract: "0xabcdef1234567890...",
        tags: ["Platform", "Analytics"],
        memeticAnalysis: {
          viralSpeed: "High",
          barriers: ["Market timing", "Competition"],
        },
        culturalReferences: {
          experimental: "No",
          defi: "No",
          internetCulture: "Yes",
        },
      },
      "PancakeSwap": {
        name: "PancakeSwap",
        symbol: "CAKE",
        price: "$2.34",
        priceChange: "+5.2%",
        marketCap: "$234M",
        volume: "$45.6M",
        buys: 8900,
        sells: 5600,
        totalHolders: 45678,
        smartWallets: {
          count: 890,
          holders: [
            {
              name: "CakeBaker",
              address: "0x45F7...",
              balance: "100K CAKE",
              value: "$234K",
              percentage: "1.12%",
            },
            {
              name: "SwapMaster",
              address: "0x2B9C...",
              balance: "75K CAKE",
              value: "$175.5K",
              percentage: "0.84%",
            },
            {
              name: "SyrupCollector",
              address: "0x6D3E...",
              balance: "50K CAKE",
              value: "$117K",
              percentage: "0.56%",
            },
            {
              name: "FarmOwner",
              address: "0x8A1F...",
              balance: "30K CAKE",
              value: "$70.2K",
              percentage: "0.34%",
            },
            {
              name: "PoolProvider",
              address: "0x1C5D...",
              balance: "20K CAKE",
              value: "$46.8K",
              percentage: "0.22%",
            }
          ]
        },
        concentration: {
          smartWallets: "12.34%",
          liquidityPools: "35.67%",
          regularHolders: "51.99%",
          top5: "22.45%",
          top10: "31.67%",
          top20: "45.23%",
          top50: "67.89%"
        },
        narrativeScore: "9/10",
        metrics: {
          virality: "7/10",
          originality: "8/10",
          timeliness: "9/10",
          memePotential: "6/10",
          spreadFactors: ["High", "High", "High"],
          viralSpeed: "High",
          barriers: ["Market competition", "Regulatory compliance"]
        },
        description: "PancakeSwap is a leading decentralized exchange (DEX) on the Binance Smart Chain, offering fast and low-cost trading with a wide range of features including yield farming, staking, and lottery games.",
        contract: "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82",
        tags: ["DEX", "DeFi"],
        memeticAnalysis: {
          viralSpeed: "High",
          barriers: ["Market competition", "Regulatory compliance"],
        },
        culturalReferences: {
          experimental: "No",
          defi: "Yes",
          internetCulture: "No",
        },
      },
      "$BEAR": {
        name: "Brown Bear",
        symbol: "$BEAR",
        price: "$0.00042",
        priceChange: "+28.7%",
        marketCap: "$4.2M",
        volume: "$2.1M",
        buys: 1200,
        sells: 800,
        totalHolders: 3456,
        smartWallets: {
          count: 234,
          holders: [
            {
              name: "BearTrader",
              address: "0x45F7...",
              balance: "10M BEAR",
              value: "$4.2K",
              percentage: "1.22%",
            },
            {
              name: "HoneyCollector",
              address: "0x2B9C...",
              balance: "7.5M BEAR",
              value: "$3.15K",
              percentage: "0.91%",
            },
            {
              name: "CaveDweller",
              address: "0x6D3E...",
              balance: "5M BEAR",
              value: "$2.1K",
              percentage: "0.61%",
            },
            {
              name: "ForestKing",
              address: "0x8A1F...",
              balance: "3M BEAR",
              value: "$1.26K",
              percentage: "0.37%",
            },
            {
              name: "WildBear",
              address: "0x1C5D...",
              balance: "2M BEAR",
              value: "$840",
              percentage: "0.24%",
            }
          ]
        },
        concentration: {
          smartWallets: "18.92%",
          liquidityPools: "28.45%",
          regularHolders: "52.63%",
          top5: "35.67%",
          top10: "48.23%",
          top20: "61.89%",
          top50: "78.45%"
        },
        narrativeScore: "7/10",
        metrics: {
          virality: "8/10",
          originality: "7/10",
          timeliness: "8/10",
          memePotential: "8/10",
          spreadFactors: ["High", "High", "Medium"],
          viralSpeed: "High",
          barriers: ["Market timing", "Competition"]
        },
        description: "Brown Bear ($BEAR) is a meme token featuring a lovable brown bear character. The token combines cute animal appeal with crypto culture, creating a unique niche in the meme coin space.",
        contract: "0xabcdef1234567890...",
        tags: ["Meme", "Animal"],
        memeticAnalysis: {
          viralSpeed: "High",
          barriers: ["Market timing", "Competition"],
        },
        culturalReferences: {
          experimental: "No",
          defi: "No",
          internetCulture: "No",
        },
      },
      "$ADHD": {
        name: "ADHD Token",
        symbol: "$ADHD",
        price: "$0.00018",
        priceChange: "+22.3%",
        marketCap: "$1.8M",
        volume: "$900K",
        buys: 1500,
        sells: 700,
        totalHolders: 2345,
        smartWallets: {
          count: 156,
          holders: [
            {
              name: "FocusMaster",
              address: "0x34B5...",
              balance: "20M ADHD",
              value: "$3.6K",
              percentage: "1.82%",
            },
            {
              name: "HyperTrader",
              address: "0x6C9D...",
              balance: "15M ADHD",
              value: "$2.7K",
              percentage: "1.37%",
            },
            {
              name: "EnergyBurst",
              address: "0x5E2F...",
              balance: "10M ADHD",
              value: "$1.8K",
              percentage: "0.91%",
            },
            {
              name: "QuickMind",
              address: "0x9A1B...",
              balance: "7.5M ADHD",
              value: "$1.35K",
              percentage: "0.68%",
            },
            {
              name: "BrainWave",
              address: "0x2D4C...",
              balance: "5M ADHD",
              value: "$900",
              percentage: "0.46%",
            }
          ]
        },
        concentration: {
          smartWallets: "18.92%",
          liquidityPools: "28.45%",
          regularHolders: "52.63%",
          top5: "35.67%",
          top10: "48.23%",
          top20: "61.89%",
          top50: "78.45%"
        },
        narrativeScore: "8/10",
        metrics: {
          virality: "9/10",
          originality: "8/10",
          timeliness: "9/10",
          memePotential: "8/10",
          spreadFactors: ["High", "High", "High"],
          viralSpeed: "High",
          barriers: ["Niche appeal", "Community building"]
        },
        description: "ADHD Token ($ADHD) is a community-driven token that aims to raise awareness about ADHD while creating a fun and engaging crypto experience. The token combines humor with a serious message about neurodiversity.",
        contract: "0xabcdef1234567890...",
        tags: ["Community", "Awareness"],
        memeticAnalysis: {
          viralSpeed: "High",
          barriers: ["Niche appeal", "Community building"],
        },
        culturalReferences: {
          experimental: "No",
          defi: "No",
          internetCulture: "Yes",
        },
      },
      "$KITTY": {
        name: "Hello Kitty",
        symbol: "$KITTY",
        price: "$0.00076",
        priceChange: "+19.8%",
        marketCap: "$7.6M",
        volume: "$3.8M",
        buys: 1800,
        sells: 900,
        totalHolders: 4567,
        smartWallets: {
          count: 289,
          holders: [
            {
              name: "KittyLover",
              address: "0x45F7...",
              balance: "15M KITTY",
              value: "$11.4K",
              percentage: "1.22%",
            },
            {
              name: "PinkDream",
              address: "0x2B9C...",
              balance: "12M KITTY",
              value: "$9.12K",
              percentage: "0.98%",
            },
            {
              name: "CuteCollector",
              address: "0x6D3E...",
              balance: "8M KITTY",
              value: "$6.08K",
              percentage: "0.65%",
            },
            {
              name: "SweetHeart",
              address: "0x8A1F...",
              balance: "5M KITTY",
              value: "$3.8K",
              percentage: "0.41%",
            },
            {
              name: "StarLight",
              address: "0x1C5D...",
              balance: "3M KITTY",
              value: "$2.28K",
              percentage: "0.24%",
            }
          ]
        },
        concentration: {
          smartWallets: "18.92%",
          liquidityPools: "28.45%",
          regularHolders: "52.63%",
          top5: "35.67%",
          top10: "48.23%",
          top20: "61.89%",
          top50: "78.45%"
        },
        narrativeScore: "9/10",
        metrics: {
          virality: "9/10",
          originality: "8/10",
          timeliness: "9/10",
          memePotential: "9/10",
          spreadFactors: ["Very High", "High", "High"],
          viralSpeed: "Very High",
          barriers: ["Brand licensing", "Market saturation"]
        },
        description: "Hello Kitty ($KITTY) is a meme token inspired by the iconic Sanrio character. The token combines the global appeal of Hello Kitty with the excitement of cryptocurrency, creating a unique blend of pop culture and digital assets.",
        contract: "0xabcdef1234567890...",
        tags: ["Meme", "Pop Culture"],
        memeticAnalysis: {
          viralSpeed: "Very High",
          barriers: ["Brand licensing", "Market saturation"],
        },
        culturalReferences: {
          experimental: "No",
          defi: "No",
          internetCulture: "Yes",
        },
      },
      "$ROBOT": {
        name: "Robot Face",
        symbol: "$ROBOT",
        price: "$0.00231",
        priceChange: "+17.5%",
        marketCap: "$23.1M",
        volume: "$11.5M",
        buys: 2100,
        sells: 1200,
        totalHolders: 6789,
        smartWallets: {
          count: 345,
          holders: [
            {
              name: "RoboTrader",
              address: "0x45F7...",
              balance: "5M ROBOT",
              value: "$11.55K",
              percentage: "1.22%",
            },
            {
              name: "CircuitMaster",
              address: "0x2B9C...",
              balance: "4M ROBOT",
              value: "$9.24K",
              percentage: "0.98%",
            },
            {
              name: "TechWizard",
              address: "0x6D3E...",
              balance: "3M ROBOT",
              value: "$6.93K",
              percentage: "0.73%",
            },
            {
              name: "BinaryKing",
              address: "0x8A1F...",
              balance: "2M ROBOT",
              value: "$4.62K",
              percentage: "0.49%",
            },
            {
              name: "DataLord",
              address: "0x1C5D...",
              balance: "1M ROBOT",
              value: "$2.31K",
              percentage: "0.24%",
            }
          ]
        },
        concentration: {
          smartWallets: "18.92%",
          liquidityPools: "28.45%",
          regularHolders: "52.63%",
          top5: "35.67%",
          top10: "48.23%",
          top20: "61.89%",
          top50: "78.45%"
        },
        narrativeScore: "8/10",
        metrics: {
          virality: "8/10",
          originality: "9/10",
          timeliness: "8/10",
          memePotential: "7/10",
          spreadFactors: ["High", "High", "Medium"],
          viralSpeed: "High",
          barriers: ["Tech focus", "Market education"]
        },
        description: "Robot Face ($ROBOT) is a tech-themed meme token that combines artificial intelligence aesthetics with cryptocurrency. The token appeals to tech enthusiasts and crypto traders who appreciate the intersection of robotics and digital assets.",
        contract: "0xabcdef1234567890...",
        tags: ["Tech", "AI"],
        memeticAnalysis: {
          viralSpeed: "High",
          barriers: ["Tech focus", "Market education"],
        },
        culturalReferences: {
          experimental: "No",
          defi: "No",
          internetCulture: "No",
        },
      },
      "$YARD": {
        name: "Dogs Yard",
        symbol: "$YARD",
        price: "$0.00058",
        priceChange: "+15.2%",
        marketCap: "$5.8M",
        volume: "$2.9M",
        buys: 1600,
        sells: 950,
        totalHolders: 3456,
        smartWallets: {
          count: 234,
          holders: [
            {
              name: "YardMaster",
              address: "0x45F7...",
              balance: "12M YARD",
              value: "$6.96K",
              percentage: "1.22%",
            },
            {
              name: "PupCollector",
              address: "0x2B9C...",
              balance: "9M YARD",
              value: "$5.22K",
              percentage: "0.91%",
            },
            {
              name: "BoneHunter",
              address: "0x6D3E...",
              balance: "6M YARD",
              value: "$3.48K",
              percentage: "0.61%",
            },
            {
              name: "TailWagger",
              address: "0x8A1F...",
              balance: "4M YARD",
              value: "$2.32K",
              percentage: "0.41%",
            },
            {
              name: "FetchKing",
              address: "0x1C5D...",
              balance: "2M YARD",
              value: "$1.16K",
              percentage: "0.24%",
            }
          ]
        },
        concentration: {
          smartWallets: "18.92%",
          liquidityPools: "28.45%",
          regularHolders: "52.63%",
          top5: "35.67%",
          top10: "48.23%",
          top20: "61.89%",
          top50: "78.45%"
        },
        narrativeScore: "7/10",
        metrics: {
          virality: "7/10",
          originality: "8/10",
          timeliness: "7/10",
          memePotential: "8/10",
          spreadFactors: ["High", "Medium", "Medium"],
          viralSpeed: "Medium",
          barriers: ["Market timing", "Competition"]
        },
        description: "Dogs Yard ($YARD) is a community-focused token that celebrates the joy of dogs and outdoor play. The token combines the universal appeal of dogs with the excitement of cryptocurrency, creating a fun and engaging community experience.",
        contract: "0xabcdef1234567890...",
        tags: ["Community", "Dogs"],
        memeticAnalysis: {
          viralSpeed: "Medium",
          barriers: ["Market timing", "Competition"],
        },
        culturalReferences: {
          experimental: "No",
          defi: "No",
          internetCulture: "Yes",
        },
      },
      "$NERD": {
        name: "Nerd Token",
        symbol: "$NERD",
        price: "$0.00124",
        priceChange: "+12.9%",
        marketCap: "$12.4M",
        volume: "$6.2M",
        buys: 1900,
        sells: 1100,
        totalHolders: 5678,
        smartWallets: {
          count: 312,
          holders: [
            {
              name: "CodeMaster",
              address: "0x45F7...",
              balance: "8M NERD",
              value: "$9.92K",
              percentage: "1.22%",
            },
            {
              name: "TechGeek",
              address: "0x2B9C...",
              balance: "6M NERD",
              value: "$7.44K",
              percentage: "0.91%",
            },
            {
              name: "PixelPusher",
              address: "0x6D3E...",
              balance: "4M NERD",
              value: "$4.96K",
              percentage: "0.61%",
            },
            {
              name: "BinaryBrain",
              address: "0x8A1F...",
              balance: "3M NERD",
              value: "$3.72K",
              percentage: "0.46%",
            },
            {
              name: "DataDork",
              address: "0x1C5D...",
              balance: "2M NERD",
              value: "$2.48K",
              percentage: "0.30%",
            }
          ]
        },
        concentration: {
          smartWallets: "18.92%",
          liquidityPools: "28.45%",
          regularHolders: "52.63%",
          top5: "35.67%",
          top10: "48.23%",
          top20: "61.89%",
          top50: "78.45%"
        },
        narrativeScore: "8/10",
        metrics: {
          virality: "7/10",
          originality: "9/10",
          timeliness: "8/10",
          memePotential: "7/10",
          spreadFactors: ["High", "High", "Medium"],
          viralSpeed: "Medium",
          barriers: ["Niche appeal", "Tech focus"]
        },
        description: "Nerd Token ($NERD) celebrates tech culture and intellectual curiosity in the crypto space. The token combines geek culture with cryptocurrency, appealing to tech enthusiasts and those who embrace their inner nerd.",
        contract: "0xabcdef1234567890...",
        tags: ["Tech", "Community"],
        memeticAnalysis: {
          viralSpeed: "Medium",
          barriers: ["Niche appeal", "Tech focus"],
        },
        culturalReferences: {
          experimental: "No",
          defi: "No",
          internetCulture: "Yes",
        },
      },
      "$DOTS": {
        name: "Dot Pattern",
        symbol: "$DOTS",
        price: "$0.00037",
        priceChange: "+10.4%",
        marketCap: "$3.7M",
        volume: "$1.85M",
        buys: 1400,
        sells: 850,
        totalHolders: 2345,
        smartWallets: {
          count: 178,
          holders: [
            {
              name: "DotMaster",
              address: "0x45F7...",
              balance: "15M DOTS",
              value: "$5.55K",
              percentage: "1.22%",
            },
            {
              name: "PatternKing",
              address: "0x2B9C...",
              balance: "12M DOTS",
              value: "$4.44K",
              percentage: "0.98%",
            },
            {
              name: "PixelArtist",
              address: "0x6D3E...",
              balance: "8M DOTS",
              value: "$2.96K",
              percentage: "0.65%",
            },
            {
              name: "DesignWizard",
              address: "0x8A1F...",
              balance: "5M DOTS",
              value: "$1.85K",
              percentage: "0.41%",
            },
            {
              name: "ArtCollector",
              address: "0x1C5D...",
              balance: "3M DOTS",
              value: "$1.11K",
              percentage: "0.24%",
            }
          ]
        },
        concentration: {
          smartWallets: "18.92%",
          liquidityPools: "28.45%",
          regularHolders: "52.63%",
          top5: "35.67%",
          top10: "48.23%",
          top20: "61.89%",
          top50: "78.45%"
        },
        narrativeScore: "7/10",
        metrics: {
          virality: "6/10",
          originality: "9/10",
          timeliness: "7/10",
          memePotential: "6/10",
          spreadFactors: ["Medium", "High", "Medium"],
          viralSpeed: "Medium",
          barriers: ["Artistic focus", "Market education"]
        },
        description: "Dot Pattern ($DOTS) is an art-focused token that celebrates digital patterns and pixel art. The token combines artistic expression with cryptocurrency, appealing to digital artists and collectors in the crypto space.",
        contract: "0xabcdef1234567890...",
        tags: ["Art", "Digital"],
        memeticAnalysis: {
          viralSpeed: "Medium",
          barriers: ["Artistic focus", "Market education"],
        },
        culturalReferences: {
          experimental: "No",
          defi: "No",
          internetCulture: "Yes",
        },
      },
      "$KILLBILL": {
        name: "Kill Bill",
        symbol: "$KILLBILL",
        price: "$0.00089",
        priceChange: "+45.6%",
        marketCap: "$8.9M",
        volume: "$4.45M",
        buys: 2200,
        sells: 950,
        totalHolders: 4567,
        smartWallets: {
          count: 289,
          holders: [
            {
              name: "SwordMaster",
              address: "0x45F7...",
              balance: "10M KILLBILL",
              value: "$8.9K",
              percentage: "1.22%",
            },
            {
              name: "RevengeSeeker",
              address: "0x2B9C...",
              balance: "8M KILLBILL",
              value: "$7.12K",
              percentage: "0.98%",
            },
            {
              name: "YellowSuit",
              address: "0x6D3E...",
              balance: "5M KILLBILL",
              value: "$4.45K",
              percentage: "0.65%",
            },
            {
              name: "HattoriHanzo",
              address: "0x8A1F...",
              balance: "3M KILLBILL",
              value: "$2.67K",
              percentage: "0.41%",
            },
            {
              name: "BrideWarrior",
              address: "0x1C5D...",
              balance: "2M KILLBILL",
              value: "$1.78K",
              percentage: "0.24%",
            }
          ]
        },
        concentration: {
          smartWallets: "18.92%",
          liquidityPools: "28.45%",
          regularHolders: "52.63%",
          top5: "35.67%",
          top10: "48.23%",
          top20: "61.89%",
          top50: "78.45%"
        },
        narrativeScore: "8/10",
        metrics: {
          virality: "9/10",
          originality: "8/10",
          timeliness: "9/10",
          memePotential: "8/10",
          spreadFactors: ["High", "High", "High"],
          viralSpeed: "High",
          barriers: ["Copyright concerns", "Market volatility"]
        },
        description: "Kill Bill ($KILLBILL) is a pop culture token inspired by the iconic film. The token combines cinematic nostalgia with cryptocurrency, appealing to movie fans and crypto enthusiasts who appreciate cultural references.",
        contract: "0xabcdef1234567890...",
        tags: ["Pop Culture", "Movie"],
        memeticAnalysis: {
          viralSpeed: "High",
          barriers: ["Copyright concerns", "Market volatility"],
        },
        culturalReferences: {
          experimental: "No",
          defi: "No",
          internetCulture: "Yes",
        },
      },
      "$CULTS": {
        name: "Cults Token",
        symbol: "$CULTS",
        price: "$0.00067",
        priceChange: "+38.9%",
        marketCap: "$6.7M",
        volume: "$3.35M",
        buys: 2000,
        sells: 1000,
        totalHolders: 5678,
        smartWallets: {
          count: 345,
          holders: [
            {
              name: "CultLeader",
              address: "0x45F7...",
              balance: "12M CULTS",
              value: "$8.04K",
              percentage: "1.22%",
            },
            {
              name: "RitualMaster",
              address: "0x2B9C...",
              balance: "9M CULTS",
              value: "$6.03K",
              percentage: "0.91%",
            },
            {
              name: "SecretKeeper",
              address: "0x6D3E...",
              balance: "6M CULTS",
              value: "$4.02K",
              percentage: "0.61%",
            },
            {
              name: "MysticTrader",
              address: "0x8A1F...",
              balance: "4M CULTS",
              value: "$2.68K",
              percentage: "0.41%",
            },
            {
              name: "Occultist",
              address: "0x1C5D...",
              balance: "2M CULTS",
              value: "$1.34K",
              percentage: "0.24%",
            }
          ]
        },
        concentration: {
          smartWallets: "18.92%",
          liquidityPools: "28.45%",
          regularHolders: "52.63%",
          top5: "35.67%",
          top10: "48.23%",
          top20: "61.89%",
          top50: "78.45%"
        },
        narrativeScore: "7/10",
        metrics: {
          virality: "8/10",
          originality: "9/10",
          timeliness: "8/10",
          memePotential: "7/10",
          spreadFactors: ["High", "High", "Medium"],
          viralSpeed: "High",
          barriers: ["Sensitive topic", "Market education"]
        },
        description: "Cults Token ($CULTS) is a unique meme token that explores the intersection of internet culture and cryptocurrency communities. The token combines humor with social commentary, appealing to those who understand the meta-narrative of crypto culture.",
        contract: "0xabcdef1234567890...",
        tags: ["Meme", "Meta"],
        memeticAnalysis: {
          viralSpeed: "High",
          barriers: ["Sensitive topic", "Market education"],
        },
        culturalReferences: {
          experimental: "No",
          defi: "No",
          internetCulture: "Yes",
        },
      },
      LUNA: {
        name: "Terra Luna",
        symbol: "LUNA",
        price: "$0.00034",
        priceChange: "-42.18%",
        marketCap: "$340M",
        volume: "$89M",
        buys: 1200,
        sells: 1800,
        totalHolders: 234567,
        smartWallets: {
          count: 890,
          holders: [
            {
              name: "LunaWhale",
              address: "0x45F7...",
              balance: "100M LUNA",
              value: "$34K",
              percentage: "1.22%",
            },
            {
              name: "TerraTrader",
              address: "0x2B9C...",
              balance: "75M LUNA",
              value: "$25.5K",
              percentage: "0.91%",
            },
            {
              name: "StableSeeker",
              address: "0x6D3E...",
              balance: "50M LUNA",
              value: "$17K",
              percentage: "0.61%",
            },
            {
              name: "AnchorHolder",
              address: "0x8A1F...",
              balance: "30M LUNA",
              value: "$10.2K",
              percentage: "0.37%",
            },
            {
              name: "USTFan",
              address: "0x1C5D...",
              balance: "20M LUNA",
              value: "$6.8K",
              percentage: "0.24%",
            }
          ]
        },
        concentration: {
          smartWallets: "18.92%",
          liquidityPools: "28.45%",
          regularHolders: "52.63%",
          top5: "35.67%",
          top10: "48.23%",
          top20: "61.89%",
          top50: "78.45%"
        },
        narrativeScore: "6/10",
        metrics: {
          virality: "7/10",
          originality: "8/10",
          timeliness: "5/10",
          memePotential: "6/10",
          spreadFactors: ["Medium", "High", "Low"],
          viralSpeed: "Medium",
          barriers: ["Historical crash", "Trust issues"]
        },
        description: "Terra Luna (LUNA) is a blockchain platform that experienced a significant crash in 2022. Despite its challenges, it maintains a dedicated community working on rebuilding and innovating in the DeFi space.",
        contract: "0xabcdef1234567890...",
        tags: ["DeFi", "Stablecoin"],
        memeticAnalysis: {
          viralSpeed: "Medium",
          barriers: ["Historical crash", "Trust issues"],
        },
        culturalReferences: {
          experimental: "No",
          defi: "Yes",
          internetCulture: "No",
        },
      },
      FTT: {
        name: "FTX Token",
        symbol: "FTT",
        price: "$1.23",
        priceChange: "-38.92%",
        marketCap: "$123M",
        volume: "$45M",
        buys: 1500,
        sells: 2000,
        totalHolders: 345678,
        smartWallets: {
          count: 1234,
          holders: [
            {
              name: "ExchangeWhale",
              address: "0x45F7...",
              balance: "100K FTT",
              value: "$123K",
              percentage: "1.22%",
            },
            {
              name: "TradingPro",
              address: "0x2B9C...",
              balance: "75K FTT",
              value: "$92.25K",
              percentage: "0.91%",
            },
            {
              name: "FeeCollector",
              address: "0x6D3E...",
              balance: "50K FTT",
              value: "$61.5K",
              percentage: "0.61%",
            },
            {
              name: "MarginTrader",
              address: "0x8A1F...",
              balance: "30K FTT",
              value: "$36.9K",
              percentage: "0.37%",
            },
            {
              name: "SpotHolder",
              address: "0x1C5D...",
              balance: "20K FTT",
              value: "$24.6K",
              percentage: "0.24%",
            }
          ]
        },
        concentration: {
          smartWallets: "18.92%",
          liquidityPools: "28.45%",
          regularHolders: "52.63%",
          top5: "35.67%",
          top10: "48.23%",
          top20: "61.89%",
          top50: "78.45%"
        },
        narrativeScore: "5/10",
        metrics: {
          virality: "6/10",
          originality: "7/10",
          timeliness: "4/10",
          memePotential: "5/10",
          spreadFactors: ["Medium", "Medium", "Low"],
          viralSpeed: "Low",
          barriers: ["Exchange collapse", "Regulatory issues"]
        },
        description: "FTX Token (FTT) was the native token of the FTX cryptocurrency exchange. Following the exchange's collapse, the token continues to trade but faces significant challenges in rebuilding trust and value.",
        contract: "0xabcdef1234567890...",
        tags: ["Exchange", "Utility"],
        memeticAnalysis: {
          viralSpeed: "Low",
          barriers: ["Exchange collapse", "Regulatory issues"],
        },
        culturalReferences: {
          experimental: "No",
          defi: "Yes",
          internetCulture: "No",
        },
      },
      SAFEMOON: {
        name: "SafeMoon",
        symbol: "SAFEMOON",
        price: "$0.000089",
        priceChange: "-31.45%",
        marketCap: "$89M",
        volume: "$12M",
        buys: 800,
        sells: 1200,
        totalHolders: 123456,
        smartWallets: {
          count: 567,
          holders: [
            {
              name: "MoonWhale",
              address: "0x45F7...",
              balance: "1B SAFEMOON",
              value: "$89K",
              percentage: "1.22%",
            },
            {
              name: "SafeHolder",
              address: "0x2B9C...",
              balance: "750M SAFEMOON",
              value: "$66.75K",
              percentage: "0.91%",
            },
            {
              name: "Reflector",
              address: "0x6D3E...",
              balance: "500M SAFEMOON",
              value: "$44.5K",
              percentage: "0.61%",
            },
            {
              name: "TokenTrader",
              address: "0x8A1F...",
              balance: "300M SAFEMOON",
              value: "$26.7K",
              percentage: "0.37%",
            },
            {
              name: "MoonFan",
              address: "0x1C5D...",
              balance: "200M SAFEMOON",
              value: "$17.8K",
              percentage: "0.24%",
            }
          ]
        },
        concentration: {
          smartWallets: "18.92%",
          liquidityPools: "28.45%",
          regularHolders: "52.63%",
          top5: "35.67%",
          top10: "48.23%",
          top20: "61.89%",
          top50: "78.45%"
        },
        narrativeScore: "4/10",
        metrics: {
          virality: "7/10",
          originality: "6/10",
          timeliness: "3/10",
          memePotential: "5/10",
          spreadFactors: ["Medium", "Low", "Low"],
          viralSpeed: "Low",
          barriers: ["Controversy", "Market sentiment"]
        },
        description: "SafeMoon (SAFEMOON) is a token that gained popularity through its unique tokenomics and marketing. Despite facing challenges and controversy, it maintains a community of holders who believe in its long-term potential.",
        contract: "0xabcdef1234567890...",
        tags: ["Meme", "Reflection"],
        memeticAnalysis: {
          viralSpeed: "Low",
          barriers: ["Controversy", "Market sentiment"],
        },
        culturalReferences: {
          experimental: "No",
          defi: "No",
          internetCulture: "No",
        },
      },
      ICP: {
        name: "Internet Computer",
        symbol: "ICP",
        price: "$8.47",
        priceChange: "-28.73%",
        marketCap: "$847M",
        volume: "$89M",
        buys: 2000,
        sells: 2500,
        totalHolders: 456789,
        smartWallets: {
          count: 1567,
          holders: [
            {
              name: "Web3Whale",
              address: "0x45F7...",
              balance: "10K ICP",
              value: "$84.7K",
              percentage: "1.22%",
            },
            {
              name: "CloudBuilder",
              address: "0x2B9C...",
              balance: "7.5K ICP",
              value: "$63.53K",
              percentage: "0.91%",
            },
            {
              name: "NetworkNode",
              address: "0x6D3E...",
              balance: "5K ICP",
              value: "$42.35K",
              percentage: "0.61%",
            },
            {
              name: "ProtocolPro",
              address: "0x8A1F...",
              balance: "3K ICP",
              value: "$25.41K",
              percentage: "0.37%",
            },
            {
              name: "ChainLinker",
              address: "0x1C5D...",
              balance: "2K ICP",
              value: "$16.94K",
              percentage: "0.24%",
            }
          ]
        },
        concentration: {
          smartWallets: "18.92%",
          liquidityPools: "28.45%",
          regularHolders: "52.63%",
          top5: "35.67%",
          top10: "48.23%",
          top20: "61.89%",
          top50: "78.45%"
        },
        narrativeScore: "7/10",
        metrics: {
          virality: "6/10",
          originality: "9/10",
          timeliness: "7/10",
          memePotential: "5/10",
          spreadFactors: ["Medium", "High", "Medium"],
          viralSpeed: "Medium",
          barriers: ["Technical complexity", "Market education"]
        },
        description: "Internet Computer (ICP) is a blockchain platform that aims to extend the functionality of the public internet. It enables developers to build and deploy software directly on the internet, creating a more decentralized web infrastructure.",
        contract: "0xabcdef1234567890...",
        tags: ["Web3", "Infrastructure"],
        memeticAnalysis: {
          viralSpeed: "Medium",
          barriers: ["Technical complexity", "Market education"],
        },
        culturalReferences: {
          experimental: "No",
          defi: "Yes",
          internetCulture: "No",
        },
      },
      // Add tokens from our widgets
      HOLDER: {
        name: "HolderCoin",
        symbol: "HOLDER",
        price: "$0.0234",
        priceChange: "+89.7%",
        marketCap: "$5.6M",
        volume: "$3.2M",
        buys: 1247,
        sells: 982,
        totalHolders: 1200,
        smartWallets: {
          count: 842,
          holders: [
            {
              name: "HolderWhale",
              address: "0x89B5...",
              balance: "1.2M HOLDER",
              value: "$28K",
              percentage: "2.47%",
            },
            {
              name: "DeepPocket",
              address: "0x7A3C...",
              balance: "890K HOLDER",
              value: "$20.8K",
              percentage: "1.83%",
            },
            {
              name: "CryptoKing",
              address: "0x4F2E...",
              balance: "650K HOLDER",
              value: "$15.2K",
              percentage: "1.34%",
            },
            {
              name: "DiamondHands",
              address: "0x9B8A...",
              balance: "420K HOLDER",
              value: "$9.8K",
              percentage: "0.86%",
            },
            {
              name: "MoonShot",
              address: "0x6D5C...",
              balance: "380K HOLDER",
              value: "$8.9K",
              percentage: "0.78%",
            },
          ],
        },
        concentration: {
          smartWallets: "8.45%",
          liquidityPools: "20.33%",
          regularHolders: "71.22%",
          top5: "14.85%",
          top10: "23.17%",
          top20: "36.68%",
          top50: "60.76%",
        },
        narrativeScore: "8/10",
        metrics: {
          virality: "7/10",
          originality: "8/10",
          timeliness: "6/10",
          memePotential: "9/10",
          spreadFactors: ["High", "Medium", "High"],
          viralSpeed: "High",
          barriers: ["Market saturation", "Meme longevity"],
        },
        description: "HolderCoin (HOLDER) is a community-driven memecoin focused on long-term holding and community building. The token emphasizes the importance of diamond hands and sustainable growth in the volatile crypto market.",
        contract: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
        tags: ["Meme", "Community", "Hold"],
        memeticAnalysis: {
          viralSpeed: "High",
          barriers: ["Market saturation", "Meme longevity"],
        },
        culturalReferences: {
          experimental: "No",
          defi: "No",
          internetCulture: "Yes",
        },
      },
      SURVIVOR: {
        name: "SurvivorCoin",
        symbol: "SURVIVOR",
        price: "$0.0234",
        priceChange: "+89.7%",
        marketCap: "$5.6M",
        volume: "$3.2M",
        buys: 1247,
        sells: 982,
        totalHolders: 1200,
        smartWallets: {
          count: 842,
          holders: [
            {
              name: "SurvivorWhale",
              address: "0x89B5...",
              balance: "1.2M SURVIVOR",
              value: "$28K",
              percentage: "2.47%",
            },
            {
              name: "DeepPocket",
              address: "0x7A3C...",
              balance: "890K SURVIVOR",
              value: "$20.8K",
              percentage: "1.83%",
            },
            {
              name: "CryptoKing",
              address: "0x4F2E...",
              balance: "650K SURVIVOR",
              value: "$15.2K",
              percentage: "1.34%",
            },
            {
              name: "DiamondHands",
              address: "0x9B8A...",
              balance: "420K SURVIVOR",
              value: "$9.8K",
              percentage: "0.86%",
            },
            {
              name: "MoonShot",
              address: "0x6D5C...",
              balance: "380K SURVIVOR",
              value: "$8.9K",
              percentage: "0.78%",
            },
          ],
        },
        concentration: {
          smartWallets: "8.45%",
          liquidityPools: "20.33%",
          regularHolders: "71.22%",
          top5: "14.85%",
          top10: "23.17%",
          top20: "36.68%",
          top50: "60.76%",
        },
        narrativeScore: "9/10",
        metrics: {
          virality: "8/10",
          originality: "9/10",
          timeliness: "7/10",
          memePotential: "9/10",
          spreadFactors: ["Very High", "High", "Medium"],
          viralSpeed: "Very High",
          barriers: ["Market competition", "Trend longevity"],
        },
        description: "SurvivorCoin (SURVIVOR) represents the resilience and survival instincts of the crypto community. It celebrates projects and communities that have weathered market storms and emerged stronger.",
        contract: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
        tags: ["Meme", "Survival", "Resilience"],
        memeticAnalysis: {
          viralSpeed: "Very High",
          barriers: ["Market competition", "Trend longevity"],
        },
        culturalReferences: {
          experimental: "No",
          defi: "No",
          internetCulture: "Yes",
        },
      },
      DIP: {
        name: "DipCoin",
        symbol: "DIP",
        price: "$0.0234",
        priceChange: "-89.7%",
        marketCap: "$5.6M",
        volume: "$3.2M",
        buys: 982,
        sells: 1247,
        totalHolders: 1200,
        smartWallets: {
          count: 842,
          holders: [
            {
              name: "DipWhale",
              address: "0x89B5...",
              balance: "1.2M DIP",
              value: "$28K",
              percentage: "2.47%",
            },
            {
              name: "DeepPocket",
              address: "0x7A3C...",
              balance: "890K DIP",
              value: "$20.8K",
              percentage: "1.83%",
            },
            {
              name: "CryptoKing",
              address: "0x4F2E...",
              balance: "650K DIP",
              value: "$15.2K",
              percentage: "1.34%",
            },
            {
              name: "DiamondHands",
              address: "0x9B8A...",
              balance: "420K DIP",
              value: "$9.8K",
              percentage: "0.86%",
            },
            {
              name: "MoonShot",
              address: "0x6D5C...",
              balance: "380K DIP",
              value: "$8.9K",
              percentage: "0.78%",
            },
          ],
        },
        concentration: {
          smartWallets: "8.45%",
          liquidityPools: "20.33%",
          regularHolders: "71.22%",
          top5: "14.85%",
          top10: "23.17%",
          top20: "36.68%",
          top50: "60.76%",
        },
        narrativeScore: "3/10",
        metrics: {
          virality: "2/10",
          originality: "4/10",
          timeliness: "1/10",
          memePotential: "3/10",
          spreadFactors: ["Low", "Very Low", "Low"],
          viralSpeed: "Very Low",
          barriers: ["Negative sentiment", "Market fear"],
        },
        description: "DipCoin (DIP) represents the inevitable market corrections and buying opportunities in crypto. While currently experiencing a significant decline, it serves as a reminder of market cycles.",
        contract: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
        tags: ["Dip", "Correction", "Opportunity"],
        memeticAnalysis: {
          viralSpeed: "Very Low",
          barriers: ["Negative sentiment", "Market fear"],
        },
        culturalReferences: {
          experimental: "No",
          defi: "No",
          internetCulture: "Yes",
        },
      }
    }

    return coinDatabase[coinSymbol] || coinDatabase.DOGE // Default to DOGE if symbol not found
  }

  // Update the component to use the dynamic data
  const coinData = getCoinData(coinSymbol)

  // Local state for comment wall
  const [comments, setComments] = useState<string[]>([])
  const [newComment, setNewComment] = useState<string>("")

  // Map smart wallet display names to known profiles from the Smart Wallets section
  const featuredWalletNames = [
    'Shadow',
    'Spuno',
    'Kruga',
    'Profit',
    'Slingoor',
    'it4i',
    'Gake',
    'Ferb',
  ]

  const walletAvatars: Record<string, string> = {
    Shadow: '/shadow pp.jpg',
    Spuno: '/spuno pp.jpg',
    Kruga: '/kruga pp.jpg',
    Profit: '/profit pp.jpg',
    Slingoor: '/slingoor pp.jpg',
    it4i: '/it4i pp.jpg',
    Gake: '/gake pp.jpg',
    Ferb: '/ferb pp.jpg',
  }

  const handleCopySymbol = (symbol: string, e: React.MouseEvent) => {
    e.stopPropagation()
    navigator.clipboard.writeText(symbol)
    // You could add a toast notification here if you want
  }

  if (!isOpen) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gradient-to-br from-blue-950/90 to-black border border-blue-500/30 max-w-4xl p-0 overflow-hidden backdrop-blur-sm shadow-2xl shadow-blue-500/25">
        <DialogHeader className="sr-only">
          <DialogTitle>{coinData.name} Details</DialogTitle>
        </DialogHeader>
        <div 
          ref={modalRef}
          className="max-h-[85vh] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-blue-900/30 [&::-webkit-scrollbar-thumb]:bg-blue-500/50 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb:hover]:bg-blue-400/70"
        >
          <div className="p-6 border-b border-blue-500/20 bg-gradient-to-br from-blue-950/50 to-black/70">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <img 
                  src={`/images/${coinData.symbol.toLowerCase()}.png`} 
                  alt={coinData.name}
                  className="w-12 h-12 rounded-lg object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/ninja-cat.png'; // Fallback image
                  }}
                />
                <div>
                  <h2 className="text-2xl font-bold text-white">{coinData.name}</h2>
                  <div className="flex items-center gap-2">
                    <div className="text-sm text-blue-400">{coinData.symbol}</div>
                    <button
                      onClick={(e) => handleCopySymbol(coinData.symbol, e)}
                      className="p-1 rounded flex-shrink-0"
                    >
                      <img src="/copy-svgrepo-com.svg" alt="Copy" width={14} height={14} className="opacity-60 filter invert brightness-0" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                {/* DexScreener */}
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="bg-zinc-900 border border-zinc-800 hover:border-cyan-500/50 shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:shadow-cyan-500/30 transition-all duration-300 p-2 rounded-lg flex items-center justify-center"
                  onClick={() => window.open(`https://dexscreener.com/solana?q=${coinData.symbol}`, '_blank')}
                  aria-label="DexScreener"
                >
                  <svg width="24" height="24" viewBox="0 0 252 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M151.818 106.866c9.177-4.576 20.854-11.312 32.545-20.541 2.465 5.119 2.735 9.586 1.465 13.193-.9 2.542-2.596 4.753-4.826 6.512-2.415 1.901-5.431 3.285-8.765 4.033-6.326 1.425-13.712.593-20.419-3.197m1.591 46.886l12.148 7.017c-24.804 13.902-31.547 39.716-39.557 64.859-8.009-25.143-14.753-50.957-39.556-64.859l12.148-7.017a5.95 5.95 0 003.84-5.845c-1.113-23.547 5.245-33.96 13.821-40.498 3.076-2.342 6.434-3.518 9.747-3.518s6.671 1.176 9.748 3.518c8.576 6.538 14.934 16.951 13.821 40.498a5.95 5.95 0 003.84 5.845zM126 0c14.042.377 28.119 3.103 40.336 8.406 8.46 3.677 16.354 8.534 23.502 14.342 3.228 2.622 5.886 5.155 8.814 8.071 7.897.273 19.438-8.5 24.796-16.709-9.221 30.23-51.299 65.929-80.43 79.589-.012-.005-.02-.012-.029-.018-5.228-3.992-11.108-5.988-16.989-5.988s-11.76 1.996-16.988 5.988c-.009.005-.017.014-.029.018-29.132-13.66-71.209-49.359-80.43-79.589 5.357 8.209 16.898 16.982 24.795 16.709 2.929-2.915 5.587-5.449 8.814-8.071C69.31 16.94 77.204 12.083 85.664 8.406 97.882 3.103 111.959.377 126 0m-25.818 106.866c-9.176-4.576-20.854-11.312-32.544-20.541-2.465 5.119-2.735 9.586-1.466 13.193.901 2.542 2.597 4.753 4.826 6.512 2.416 1.901 5.432 3.285 8.766 4.033 6.326 1.425 13.711.593 20.418-3.197" fill="#F59E0B"/>
                    <path d="M197.167 75.016c6.436-6.495 12.107-13.684 16.667-20.099l2.316 4.359c7.456 14.917 11.33 29.774 11.33 46.494l-.016 26.532.14 13.754c.54 33.766 7.846 67.929 24.396 99.193l-34.627-27.922-24.501 39.759-25.74-24.231L126 299.604l-41.132-66.748-25.739 24.231-24.501-39.759L0 245.25c16.55-31.264 23.856-65.427 24.397-99.193l.14-13.754-.016-26.532c0-16.721 3.873-31.578 11.331-46.494l2.315-4.359c4.56 6.415 10.23 13.603 16.667 20.099l-2.01 4.175c-3.905 8.109-5.198 17.176-2.156 25.799 1.961 5.554 5.54 10.317 10.154 13.953 4.48 3.531 9.782 5.911 15.333 7.161 3.616.814 7.3 1.149 10.96 1.035-.854 4.841-1.227 9.862-1.251 14.978L53.2 160.984l25.206 14.129a41.926 41.926 0 715.734 3.869c20.781 18.658 33.275 73.855 41.861 100.816 8.587-26.961 21.08-82.158 41.862-100.816a41.865 41.865 0 715.734-3.869l25.206-14.129-32.665-18.866c-.024-5.116-.397-10.137-1.251-14.978 3.66.114 7.344-.221 10.96-1.035 5.551-1.25 10.854-3.63 15.333-7.161 4.613-3.636 8.193-8.399 10.153-13.953 3.043-8.623 1.749-17.689-2.155-25.799l-2.01-4.175z" fill="#F59E0B"/>
                  </svg>
                </Button>
                {/* Nova */}
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="bg-zinc-900 border border-zinc-800 hover:border-indigo-500/50 shadow-[0_0_15px_rgba(139,92,246,0.2)] hover:shadow-indigo-500/30 transition-all duration-300 p-2 rounded-lg flex items-center justify-center"
                  onClick={() => window.open(`https://nova.app`, '_blank')}
                  aria-label="Nova"
                >
                  <img src="/nova-logo.svg" alt="Nova" width={24} height={24} />
                </Button>
                {/* Photon */}
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="bg-zinc-900 border border-zinc-800 hover:border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-blue-500/30 transition-all duration-300 p-2 rounded-lg flex items-center justify-center"
                  onClick={() => window.open(`https://photon.trade`, '_blank')}
                  aria-label="Photon"
                >
                  <img src="/photon logo.svg" alt="Photon" width={24} height={24} />
                </Button>
                {/* Axiom */}
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="bg-zinc-900 border border-zinc-800 hover:border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.2)] hover:shadow-purple-500/30 transition-all duration-300 p-2 rounded-lg flex items-center justify-center"
                  onClick={() => window.open(`https://axiom.trade`, '_blank')}
                  aria-label="Axiom"
                >
                  <svg width="24" height="24" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.1384 17.3876H11.8623L18.0001 7.00012L24.1384 17.3876Z" fill="#A855F7"/>
                    <path d="M31 29.0003L5 29.0003L9.96764 20.5933L26.0324 20.5933L31 29.0003Z" fill="#A855F7"/>
                  </svg>
                </Button>
                {/* GMGN */}
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="bg-zinc-900 border border-zinc-800 hover:border-green-500/50 shadow-[0_0_15px_rgba(34,197,94,0.2)] hover:shadow-green-500/30 transition-all duration-300 p-2 rounded-lg flex items-center justify-center"
                  onClick={() => window.open(`https://gmgn.ai`, '_blank')}
                  aria-label="GMGN"
                >
                  <img src="/gmgn-logo.svg" alt="GMGN" width={24} height={24} />
                </Button>
                {/* Bull X */}
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="bg-zinc-900 border border-zinc-800 hover:border-orange-500/50 shadow-[0_0_15px_rgba(251,191,36,0.2)] hover:shadow-orange-500/30 transition-all duration-300 p-2 rounded-lg flex items-center justify-center"
                  onClick={() => window.open(`https://bullx.io`, '_blank')}
                  aria-label="Bull X"
                >
                  <img src="/Bullx-logo.svg" alt="Bull X" width={24} height={24} />
                </Button>
              </div>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-4 gap-4 p-4 border-b border-blue-500/20 bg-gradient-to-br from-blue-950/40 to-black/70">
            <div className="bg-black/80 border border-blue-500/30 p-3 rounded-lg shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-300">
              <div className="text-xs text-blue-400 mb-1">💰 PRICE</div>
              <div className="text-lg font-bold text-white">{coinData.price}</div>
            </div>
            <div className="bg-black/80 border border-blue-500/30 p-3 rounded-lg shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-300">
              <div className="text-xs text-blue-400 mb-1">📊 MARKET CAP</div>
              <div className="text-lg font-bold text-white">{coinData.marketCap}</div>
            </div>
            <div className="bg-black/80 border border-blue-500/30 p-3 rounded-lg shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-300">
              <div className="text-xs text-blue-400 mb-1">📈 24H VOLUME</div>
              <div className="text-lg font-bold text-white">{coinData.volume}</div>
            </div>
            <div className="bg-black/80 border border-blue-500/30 p-3 rounded-lg shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-300">
              <div className="text-xs text-blue-400 mb-1">⚖️ BUY/SELL RATIO</div>
              <div className="text-lg font-bold text-white">1.27</div>
            </div>
          </div>

          {/* Price Chart */}
          <div className="p-4 border-b border-blue-500/20 bg-gradient-to-br from-blue-950/40 to-black/70">
            <TokenChart 
              tokenSymbol={coinData.symbol}
              tokenContract={coinData.contract}
              priceChange={coinData.priceChange}
              className="w-full"
            />
          </div>

          {/* Description under chart */}
          <div className="p-4 border-b border-blue-500/20 bg-gradient-to-br from-blue-950/40 to-black/70">
            <div className="bg-black/40 border border-blue-500/20 p-4 rounded-lg shadow-lg shadow-blue-500/10 backdrop-blur-md">
              <h4 className="text-xs font-semibold text-blue-400 mb-2">Description</h4>
              <p className="text-sm text-white">{coinData.description}</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-4">
            <div className="grid grid-cols-2 gap-6 mb-6">
              {/* Left Column - Holders */}
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xs font-semibold text-blue-400">Holders</h3>
                  </div>
                  <div className="bg-black border border-blue-500/30 p-3 rounded-lg shadow-lg shadow-blue-500/10">
                    <div className="text-xs text-blue-400 mb-1">Total Holders</div>
                    <div className="text-xl font-bold text-white">{coinData.totalHolders.toLocaleString()}</div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xs font-semibold text-blue-400">Top Holders</h3>
                  </div>
                  <div className="bg-black border border-blue-500/30 p-3 rounded-lg space-y-3 shadow-lg shadow-blue-500/10">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-white">Smart Wallets</span>
                      <span className="text-xs text-white">{coinData.concentration.smartWallets}</span>
                    </div>
                    <div className="w-full bg-blue-900/40 rounded-full h-1.5">
                      <div
                        className="bg-blue-500/70 h-1.5 rounded-full shadow-sm shadow-blue-500/30"
                        style={{ width: coinData.concentration.smartWallets }}
                      ></div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-white">Liquidity Pools (1)</span>
                      <span className="text-xs text-white">{coinData.concentration.liquidityPools}</span>
                    </div>
                    <div className="w-full bg-blue-900/40 rounded-full h-1.5">
                      <div
                        className="bg-blue-400/70 h-1.5 rounded-full shadow-sm shadow-blue-400/30"
                        style={{ width: coinData.concentration.liquidityPools }}
                      ></div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-white">Regular Holders</span>
                      <span className="text-xs text-white">{coinData.concentration.regularHolders}</span>
                    </div>

                    <div className="border-t border-blue-500/20 pt-3 mt-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-white">Top 5 Holders</span>
                        <span className="text-xs text-white">{coinData.concentration.top5}</span>
                      </div>
                      <div className="w-full bg-blue-900/40 rounded-full h-1.5">
                        <div
                          className="bg-amber-500/70 h-1.5 rounded-full shadow-sm shadow-amber-500/30"
                          style={{ width: coinData.concentration.top5 }}
                        ></div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-white">Top 10 Holders</span>
                      <span className="text-xs text-white">{coinData.concentration.top10}</span>
                    </div>
                    <div className="w-full bg-blue-900/40 rounded-full h-1.5">
                      <div
                        className="bg-rose-500/70 h-1.5 rounded-full shadow-sm shadow-rose-500/30"
                        style={{ width: coinData.concentration.top10 }}
                      ></div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-white">Top 20 Holders</span>
                      <span className="text-xs text-white">{coinData.concentration.top20}</span>
                    </div>
                    <div className="w-full bg-blue-900/40 rounded-full h-1.5">
                      <div
                        className="bg-indigo-500/70 h-1.5 rounded-full shadow-sm shadow-indigo-500/30"
                        style={{ width: coinData.concentration.top20 }}
                      ></div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-white">Top 50 Holders</span>
                      <span className="text-xs text-white">{coinData.concentration.top50}</span>
                    </div>
                    <div className="w-full bg-blue-900/40 rounded-full h-1.5">
                      <div
                        className="bg-cyan-500/70 h-1.5 rounded-full shadow-sm shadow-cyan-500/30"
                        style={{ width: coinData.concentration.top50 }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Smart Wallets */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-xs font-semibold text-blue-400">Smart Wallets</h3>
                </div>
                <div className="text-[11px] text-slate-400 mb-2">Current Holdings</div>
                <div className="space-y-2">
                  {coinData.smartWallets.holders.slice(0, 5).map((holder: CoinHolder, index: number) => {
                    const displayName = featuredWalletNames[index % featuredWalletNames.length] || holder.name
                    const avatarSrc = walletAvatars[displayName] || '/placeholder-user.jpg'
                    return (
                      <div
                        key={index}
                        className="bg-black border border-blue-500/20 p-3 rounded-lg hover:bg-blue-950/40 hover:border-blue-400/30 transition-all duration-300 shadow-lg shadow-blue-500/5"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <img
                            src={avatarSrc}
                            alt={displayName}
                            className="w-7 h-7 rounded-full border border-blue-500/40 object-cover"
                          />
                          <div>
                            <div className="text-xs font-semibold text-white">{displayName}</div>
                            <div className="text-xs text-white">{holder.address}</div>
                          </div>
                          <div className="ml-auto text-xs text-white">{holder.percentage}</div>
                        </div>
                        <div className="text-xs text-white">Balance: {holder.balance}</div>
                        <div className="text-xs text-white">Value: {holder.value}</div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Comment Wall (replaces narrative/memetic/cultural sections) */}
            <div className="space-y-4">
              <div className="bg-black border border-blue-500/30 p-4 rounded-lg shadow-lg shadow-blue-500/10">
                <h4 className="text-xs font-semibold text-blue-400 mb-2">Comment Wall</h4>
                <div className="space-y-3">
                  <Textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Share your thoughts about this coin..."
                    className="min-h-[80px] bg-black border-blue-500/30 text-white placeholder:text-zinc-500"
                  />
                  <div className="flex justify-end">
                    <Button
                      onClick={() => {
                        if (!newComment.trim()) return;
                        setComments([newComment.trim(), ...comments]);
                        setNewComment('');
                      }}
                      className="bg-blue-600 hover:bg-blue-500 text-white"
                    >
                      Post
                    </Button>
                  </div>
                </div>
                {comments.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {comments.map((c, i) => (
                      <div key={i} className="border border-blue-500/20 p-3 rounded bg-black text-white">
                        {c}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-blue-500/20 p-4 text-center bg-gradient-to-br from-blue-950/50 to-black/70">
            <Button
              variant="ghost"
              onClick={onClose}
              className="text-blue-400 hover:text-blue-300 hover:bg-blue-950/40"
            >
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
