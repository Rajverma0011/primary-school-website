// Utility to handle image loading with fallbacks
export const getImagePath = (imageName) => {
  // Handle image extensions and fallbacks
  const basePath = '/images/';
  
  // Check if image has proper extension
  if (!imageName.includes('.')) {
    return `${basePath}${imageName}.jpg`;
  }
  
  return `${basePath}${imageName}`;
};

export const handleImageError = (e) => {
  // Fallback for broken images
  e.target.src = '/images/placeholder.jpg';
  e.target.onerror = null; // Prevent infinite loop
};

// Create a default placeholder if needed
export const createPlaceholder = (width = 100, height = 100, text = 'Logo') => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  
  // Draw placeholder
  ctx.fillStyle = '#f0f0f0';
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = '#666';
  ctx.font = '16px Arial';
  ctx.textAlign = 'center';
  ctx.fillText(text, width/2, height/2);
  
  return canvas.toDataURL();
};
