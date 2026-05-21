// src/components/campaign/CampaignEditor.tsx

"use client";

import { useState } from "react";
import type { ChangeEvent } from "react";

import { Input } from "../ui/input";
import { Button } from "../ui/button";

export interface CampaignData {
  campaignName: string;
  region: string;
  crop: string;
  language: string;
  pest: string;
  weather: string;
}

export default function CampaignEditor() {

  const [form, setForm] = useState<CampaignData>({
    campaignName: "",
    region: "",
    crop: "",
    language: "",
    pest: "",
    weather: "",
  });

  function updateField(
    field: keyof CampaignData,
    value: string
  ) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function generateCampaign() {
    console.log(
      "Campaign Generated",
      form
    );
  }

  return (
    <div className="bg-card border rounded-2xl p-6 space-y-4">

      <h2 className="text-xl font-bold">
        Campaign Studio
      </h2>

      <Input
        placeholder="Campaign Name"
        value={form.campaignName}
        onChange={(
          e: ChangeEvent<HTMLInputElement>
        ) =>
          updateField(
            "campaignName",
            e.target.value
          )
        }
      />

      <Input
        placeholder="Target Region"
        value={form.region}
        onChange={(
          e: ChangeEvent<HTMLInputElement>
        ) =>
          updateField(
            "region",
            e.target.value
          )
        }
      />

      <Input
        placeholder="Crop"
        value={form.crop}
        onChange={(
          e: ChangeEvent<HTMLInputElement>
        ) =>
          updateField(
            "crop",
            e.target.value
          )
        }
      />

      <Input
        placeholder="Language"
        value={form.language}
        onChange={(
          e: ChangeEvent<HTMLInputElement>
        ) =>
          updateField(
            "language",
            e.target.value
          )
        }
      />

      <Input
        placeholder="Pest"
        value={form.pest}
        onChange={(
          e: ChangeEvent<HTMLInputElement>
        ) =>
          updateField(
            "pest",
            e.target.value
          )
        }
      />

      <Input
        placeholder="Weather"
        value={form.weather}
        onChange={(
          e: ChangeEvent<HTMLInputElement>
        ) =>
          updateField(
            "weather",
            e.target.value
          )
        }
      />

      <Button
        className="w-full"
        onClick={generateCampaign}
      >
        Generate Campaign
      </Button>

    </div>
  );
}