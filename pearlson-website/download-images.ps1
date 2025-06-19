$imageUrls = @{
    "blog-tutor-cbc.jpg" = "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80"
    "blog-interactive-french.jpg" = "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=80"
    "blog-german-culture.jpg" = "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&q=80"
    "blog-multilingual-fest.jpg" = "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80"
    "blog-sign-language.jpg" = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
    "blog-tutor-success.jpg" = "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80"
}

foreach ($image in $imageUrls.GetEnumerator()) {
    $outputPath = "public/Images/$($image.Key)"
    Write-Host "Downloading $($image.Key)..."
    Invoke-WebRequest -Uri $image.Value -OutFile $outputPath
    Write-Host "Downloaded $($image.Key) successfully"
} 