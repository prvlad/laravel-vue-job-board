<?php


namespace App\Service;



class LoginService
{
    /**
     * @param array $credentials
     * @return array
     */
    public function login(array $credentials): array
    {
        try {
            $token = auth()->attempt($credentials);

            if (!$token) {
                return [
                    'success' => false,
                    'message' => 'Login credentials are invalid.',
                    'code' => 400
                ];
            }
        } catch (\Exception $e) {
            return [
                'success' => false,
                'message' => 'Could not create token.',
                'code' => 500
            ];
        }

        return [
            'success' => true,
            'token' => $token,
            'code' => 200
        ];
    }
}
