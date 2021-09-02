/**
 * Function to download file from specified path
 */
export function downloadFile(fileUrl: string, filename?: string): void {
    // Get filename if not passed to function
    if (!filename) filename = getFilenameFromFileUrl(fileUrl);

    // Create <a> element
    const link = document.createElement('a');

    // Set all attributes
    link.setAttribute('type', 'hidden');
    link.style.display = 'none';
    link.href = fileUrl;
    link.download = filename;

    // Add element to page
    document.body.appendChild(link);

    // Click on element
    link.click();

    // Remove element from page
    link.remove();
}

/**
 * @param fileUrl 
 * @returns filename from passed path
 * @example getFilenameFromFileUrl('src/test/example.png') // example.png
 */
export function getFilenameFromFileUrl(fileUrl: string): string {
    const lastSlashIndex = fileUrl.lastIndexOf('/');
    return fileUrl.substring(lastSlashIndex);
}

/**
 * Planned structure:
 * downloadBlob(blob);
 * openBlobInNewCard(blob);
 * openFileUrlInNewCard(fileUrl);
 */