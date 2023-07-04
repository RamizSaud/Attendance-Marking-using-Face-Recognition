import face_recognition
import cv2
import os
import numpy as np
import datetime
import pandas as pd

KNOWN_FACES_DIR = "known_faces"
TOLERANCE = 0.5
FRAME_THICKNESS = 3
FONT_THICKNESS = 2
MODEL = "hog"

file = open("D:/GIKI/4th semester/AI211/Project/Website/backend/model/face_encodings", "rb")
known_faces = np.load(file)
file.close()

file = open("D:/GIKI/4th semester/AI211/Project/Website/backend/model/face_names", "rb")
known_names = np.load(file)
file.close()

attendance = set()

video = cv2.VideoCapture(0)

endTime = datetime.datetime.now() + datetime.timedelta(seconds=30)
while datetime.datetime.now() <= endTime:
    ret, image = video.read()
    locations = face_recognition.face_locations(image,model=MODEL)
    encodings = face_recognition.face_encodings(image,locations)
    for face_encoding, face_location in zip(encodings,locations):
        results = face_recognition.compare_faces(known_faces,face_encoding,TOLERANCE)
        match = None
        if True in results:
            match = known_names[results.index(True)]
            attendance.add(match)
            top_left = (face_location[3],face_location[0])
            bottom_right = (face_location[1],face_location[2])
            color = (0,255,0)
            cv2.rectangle(image,top_left,bottom_right,color,FRAME_THICKNESS)
            top_left = (face_location[3],face_location[2])
            bottom_right = (face_location[1],face_location[2]+22)
            cv2.rectangle(image,top_left,bottom_right,color,cv2.FILLED)
            cv2.putText(image,match,(face_location[3]+10,face_location[2]+15),cv2.FONT_HERSHEY_SIMPLEX,0.5,(200,200,200),FONT_THICKNESS)
    cv2.imshow('video',image)
    if cv2.waitKey(10) & 0xFF == ord('q'):
        break

fileName = "AI-211 A"+".csv"
path=f"D:/GIKI/4th semester/AI211/Project/Website/backend/model/attendance/{fileName}"
df = pd.read_csv(path)
for i in attendance:
    df.loc[df["Name"]==i,"Attendance"] = df.loc[df["Name"]==i,"Attendance"] + 1

df.to_csv(path,index=False)


