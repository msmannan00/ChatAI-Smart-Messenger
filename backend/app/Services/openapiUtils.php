<?php

namespace App\Services;

use Illuminate\Http\JsonResponse;
use OpenAI;

class openapiUtils
{
    public static function formatKeys(array $data): string
    {
        return "i want you to respond as if you are '{$data['behavior']}'. previously asked you '{$data['behavior']}' now tell me '{$data['request']}'";
    }

    public static function requestOpenAPI(string $content): JsonResponse
    {
        $apiKey = env('OPENAI_API_KEY', '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');
        $client = OpenAI::client($apiKey);

        $result = $client->chat()->create([
            'model' => 'gpt-3.5-turbo',
            'messages' => [
                ['role' => 'user', 'content' => $content],
            ],
        ]);

        return response()->json(['generated_text' => $result->choices[0]->message->content]);
    }

}
