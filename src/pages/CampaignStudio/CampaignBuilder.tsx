"use client";

import { useState } from "react";
import type { ChangeEvent } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function CampaignBuilder() {

  const [campaign, setCampaign] = useState("");
  const [region, setRegion] = useState("");
  const [crop, setCrop] = useState("");
  const [language, setLanguage] = useState("");
  const [pest, setPest] = useState("");
  const [weather, setWeather] = useState("");

  function generate() {
    console.log({
      campaign,
      region,
      crop,
      language,
      pest,
      weather,
    });
  }

  return (
    <div className="border rounded-2xl bg-card p-6 space-y-5">

      <h2 className="text-xl font-bold">
        Campaign Builder
      </h2>

      <Input
        placeholder="Campaign Name"
        value={campaign}
        onChange={(
          e: ChangeEvent<HTMLInputElement>
        ) =>
          setCampaign(
            e.target.value
          )
        }
      />

      <Input
        placeholder="Target Region"
        value={region}
        onChange={(
          e: ChangeEvent<HTMLInputElement>
        ) =>
          setRegion(
            e.target.value
          )
        }
      />

      <Input
        placeholder="Crop"
        value={crop}
        onChange={(
          e: ChangeEvent<HTMLInputElement>
        ) =>
          setCrop(
            e.target.value
          )
        }
      />

      <Input
        placeholder="Language"
        value={language}
        onChange={(
          e: ChangeEvent<HTMLInputElement>
        ) =>
          setLanguage(
            e.target.value
          )
        }
      />

      <Input
        placeholder="Pest"
        value={pest}
        onChange={(
          e: ChangeEvent<HTMLInputElement>
        ) =>
          setPest(
            e.target.value
          )
        }
      />

      <Input
        placeholder="Weather"
        value={weather}
        onChange={(
          e: ChangeEvent<HTMLInputElement>
        ) =>
          setWeather(
            e.target.value
          )
        }
      />

      <Button
        className="w-full"
        onClick={generate}
      >
        Generate Campaign
      </Button>

    </div>
  );
}