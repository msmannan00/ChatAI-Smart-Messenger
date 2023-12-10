<?php

namespace App\Services;

use Illuminate\Support\Facades\Validator;

class InputValidator
{
    public static function validate(array $data): array
    {
        $validator = Validator::make($data, [
            'behavior' => 'required|string',
            'lastMessage' => 'required|string',
            'request' => 'required|string',
        ]);

        if ($validator->fails()) {
            return ['errors' => $validator->errors()->toArray()];
        }

        return [];
    }

    public static function sanitize(array $data): array
    {
        $requiredKeys = ['behavior', 'lastMessage', 'request'];
        $missingKeys = array_diff($requiredKeys, array_keys($data));

        if (!empty($missingKeys)) {
            return ['errors' => ['keys_not_found' => 'Required keys not found: ' . implode(', ', $missingKeys)]];
        }

        $sanitizedData = [];
        foreach ($data as $key => $value) {
            $sanitizedData[$key] = filter_var($value, FILTER_SANITIZE_STRING);
        }

        return $sanitizedData;
    }
}
