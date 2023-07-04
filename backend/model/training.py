import face_recognition
import cv2
import os
import numpy as np

KNOWN_FACES_DIR = "D:/GIKI/4th semester/AI211/Project/Website/backend/model/known_faces"
TOLERANCE = 0.6
FRAME_THICKNESS = 3
FONT_THICKNESS = 2
MODEL = "hog"

known_faces = []
known_names = []

for name in os.listdir(KNOWN_FACES_DIR):
    for filename in os.listdir(f"{KNOWN_FACES_DIR}/{name}"):
        image = face_recognition.load_image_file(f"{KNOWN_FACES_DIR}/{name}/{filename}")
        encoding = face_recognition.face_encodings(image)[0]
        known_faces.append(encoding)
        known_names.append(name)

file = open("D:/GIKI/4th semester/AI211/Project/Website/backend/model/face_encodings", "wb")
np.save(file, known_faces)
file.close()

file = open("D:/GIKI/4th semester/AI211/Project/Website/backend/model/face_names", "wb")
np.save(file, known_names)
file.close()

