<?php

namespace App;

use Laravel\Socialite\Contracts\User as ProviderUser;
use App\SocialUser;
use App\User;

class SocialAccountService
{
    public function createOrGetUser(ProviderUser $providerUser)
    {
        $account = SocialUser::whereProvider('facebook')
        ->whereProviderUserId($providerUser->getId())
        ->first();
        if ($account) {
            return $account->user;
        } else {



            $user = User::whereEmail($providerUser->getEmail())->first();
            // dd($providerUser);
            if (!$user) {

                $user = User::create([
                    'email' => $providerUser->getEmail(),
                    'name' => $providerUser->getName(),
                    'password' => time().'_'.$providerUser->getId(),
                    'role_id' => 2
                    ]);

                $account = new SocialUser([
                    'provider_user_id' => $providerUser->getId(),
                    'provider' => 'facebook',
                    'user_id' =>$user->id
                    ]);
            }

            // $account->user()->associate($user);
            $account->save();
            // dd($user);
            return $user;

        }

    }
}