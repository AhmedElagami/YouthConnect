import { NextResponse } from "next/server";

export async function GET() {
  // Get userId parameter
  const rewards = [
    {
      id: 0,
      rewardName: "Zara Discount 10%",
      cost: 10,
    },
    {
      id: 1,
      rewardName: "10 GB",
      cost: 5,
    },
    {
      id: 2,
      rewardName: "24 hrs Unlimited SMS",
      cost: 4,
    },
    {
      id: 3,
      rewardName: "Starbucks 5$",
      cost: 8,
    },
  ];

  // If the user is found, return it as a JSON response
  return NextResponse.json(rewards, { status: 200 });
}
