<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Services\InputValidator;
use App\Services\openapiUtils;

class openaiMessenger extends Controller
{
    public function test(Request $request): JsonResponse
    {
        $validationErrors = InputValidator::validate($request->all());
        if (!empty($validationErrors)) {
            return response()->json($validationErrors, 400);
        }

        $sanitizedData = InputValidator::sanitize($request->all());
        $request = OpenApiUtils::formatKeys($sanitizedData);

        return response()->json([$request]);
    }

    public function request(Request $request): JsonResponse
    {
        $validationErrors = InputValidator::validate($request->all());
        if (!empty($validationErrors)) {
            return response()->json($validationErrors, 400);
        }

        $sanitizedData = InputValidator::sanitize($request->all());
        $request = OpenApiUtils::formatKeys($sanitizedData);
        $response = OpenApiUtils::requestOpenAPI($request);

        return response()->json([$response]);
    }
}
