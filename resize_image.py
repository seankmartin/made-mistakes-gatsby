from PIL import Image
import os


def downscale_folder(folder):
    pass


def downscale_image(image, source_res=(1920, 1080), dest_res=(1600, 900)):
    if (source_res is None) or (image.size == source_res):
        new_image = image.resize(dest_res)
        base, ext = os.path.splitext(image.filename)
        print("Saving image to {}".format(base + "_downscale" + ext))
        new_image.save(base + "_downscale" + ext)


if __name__ == "__main__":
    image_path = r"/home/sean/Repos/made-mistakes-gatsby/src/images/gatsby.jpg"
    if os.path.isfile(image_path):
        image = Image.open(image_path)
        downscale_image(image, source_res=None)
    elif os.path.isdir(image_path):
        downscale_folder(image_path)
    else:
        print("{} is not path or directory.".format(image_path))
