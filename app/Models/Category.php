<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    CONST CAT_HLADKE = 1;
    CONST CAT_CIHLICKA = 2;
    CONST CAT_STIPANY_KAMEN = 3;
    CONST CAT_LITY_PREMIUM = 4;

    const CREATED_AT = null;
    const UPDATED_AT = null;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'price',
        'thumbnail',
        'type',
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array<int, string>
     */
    protected $appends = ['thumbnail_url', 'thumbnail_file'];

    /**
     * Get the URL of the thumbnail.
     *
     * @return string|null
     */
    public function getThumbnailUrlAttribute()
    {
        if ($this->thumbnail) {
            return asset('attachments/' . $this->thumbnail);
        }
        
        return null;
    }

    /**
     * Get the file of the thumbnail.
     *
     * @return array|null
     */
    public function getThumbnailFileAttribute() {
        if ($this->thumbnail) {
            return [
                "file" => $this->thumbnail,
            ];
        }

        return null;
    }
    public static function getNameById($id) {
        $categoryType = Category::find($id);
        return $categoryType ? $categoryType->name : "-";
     }

}
