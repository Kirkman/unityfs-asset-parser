declare module 'unitiyfs-asset-parser' {
    export interface Sprite
    {
		spriteName: string,
		spriteBitmap: {
			data: Buffer,
			width: number,
			height: number
		}
	}

    export interface ParseResults
    {
		imageName: string,
		imageBitmap: {
			data: Buffer,
			width: number,
			height: number
		},
		sprites: Array<Sprite>
	}

    export function parseAssetBundle(data: Uint8Array): ParseResults | undefined;
}