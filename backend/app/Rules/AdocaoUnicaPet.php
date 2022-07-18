<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;
use App\Models\Adocao;

class AdocaoUnicaPet implements Rule
{   
    private int $petId;
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct($petId)
    {
        //
        $this->petId = $petId;
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        //
        $jaAdotouEstePet = Adocao::where('email', $value)
                                 ->where('pet_id', $this->petId)
                                 ->first();

        return !$jaAdotouEstePet;                                 
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'Você ja adotou este pet';
    }
}
