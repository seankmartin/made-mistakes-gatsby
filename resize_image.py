from PIL import Image
import os
import argparse


def downscale_folder(folder):
    pass


def downscale_image(
    image, source_res=(1920, 1080), dest_res=(1600, 900), overwrite=False
):
    if (source_res is None) or (image.size == source_res):
        new_image = image.resize(dest_res)
        base, ext = os.path.splitext(image.filename)
        if overwrite:
            print("Overwriting image at {}".format(image.filename))
            new_image.save(image.filename)
        else:
            print("Saving image to {}".format(base + "_downscale" + ext))
            new_image.save(base + "_downscale" + ext)


if __name__ == "__main__":
    parser = argparse.ArgumentParser("Command line args")
    parser.add_argument(
        "path", type=str, help="Path to the image or folder of images",
    )
    parser.add_argument(
        "--in_place", "-i", action="store_true", help="In-place resizing"
    )
    parsed = parser.parse_args()
    image_path = parsed.path
    overwrite = parsed.in_place
    if os.path.isfile(image_path):
        image = Image.open(image_path)
        downscale_image(image, source_res=None, overwrite=overwrite)
    elif os.path.isdir(image_path):
        downscale_folder(image_path)
    else:
        print("{} is not path or directory.".format(image_path))
