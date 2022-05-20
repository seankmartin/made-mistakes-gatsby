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
        "path", type=str, help="Path to the image",
    )
    parser.add_argument(
        "--in_place", "-i", action="store_true", help="In-place resizing"
    )
    parser.add_argument(
        "--dest_x", "-x", type=int, help="Destination x size", default=1600
    )
    parser.add_argument(
        "--dest_y", "-y", type=int, help="Destination y size", default=900
    )
    parsed = parser.parse_args()
    image_path = parsed.path
    overwrite = parsed.in_place
    x = parsed.dest_x
    y = parsed.dest_y
    if os.path.isfile(image_path):
        image = Image.open(image_path)
        downscale_image(image, source_res=None, dest_res=(x, y), overwrite=overwrite)
    else:
        print("{} is not valid path.".format(image_path))
