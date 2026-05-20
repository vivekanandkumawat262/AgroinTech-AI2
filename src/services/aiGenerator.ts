interface AIInput{

crop:string;

region:string;

weather:string;

pest:string;

language:string;

cropStage:string;

}

export async function generateMessage({

crop,

region,

weather,

pest,

language,

cropStage

}:AIInput){

await new Promise(
resolve=>

setTimeout(
resolve,
1000
)

);

return{

message:

`नमस्ते किसान मित्र 🌱

फसल:
${crop}

क्षेत्र:
${region}

मौसम:
${weather}

फसल चरण:
${cropStage}

चेतावनी:
${pest}

अनुशंसित उत्पाद उपयोग करें।`,

recommendation:
`${crop} Shield Pro`,

warning:
`${pest} Risk High`,

translation:

`${pest} detected in ${crop} crop from ${region}`,

channel:

language==="Hindi"
?

"WhatsApp"

:

"SMS",

confidence:91

};

}