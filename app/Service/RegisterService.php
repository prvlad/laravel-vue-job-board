<?php


namespace App\Service;

use App\Interfaces\UserRepositoryInterface;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class RegisterService
{
    /**
     * @var UserRepositoryInterface
     */
    private $userRepository;

    /**
     * RegisterService constructor.
     * @param UserRepositoryInterface $userRepository
     */
    public function __construct(UserRepositoryInterface $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    /**
     * @param array $userData
     * @return array
     */
    public function register(array $userData): array
    {
        /** array preparation for saving */
        $prepareData = [
            'name' => $userData['name'],
            'email' => $userData['email'],
            'password' => Hash::make($userData['password']),
            'coins' => 0
        ];

        try {
            /** save user */
            $createdUser = $this->userRepository->createUser($prepareData);

            /** get auth token */
            $token = auth()->attempt([
                'email' => $createdUser->email,
                'password' => $userData['password'],
            ]);

            if (!$token) {
                return [
                    'message' => 'Unauthorized',
                    'token' => null,
                    'code' => 401
                ];
            }
        } catch (\Exception $e) {
            return [
                'message' => $e->getMessage(),
                'token' => null,
                'code' => $e->getCode()
            ];
        }

        return [
            'message' => 'Registration successful',
            'token' => $token,
            'code' => 200
        ];
    }
}
