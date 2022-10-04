<?php


namespace App\Interfaces;


interface UserRepositoryInterface
{
    /**
     * @param array $data
     * @return mixed
     */
    public function createUser(array $data);
}
