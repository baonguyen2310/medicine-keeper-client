import numpy
import cv2

anh1 = cv2.imread("E:\ee.jpg")
anh2 = cv2.cvtColor(anh1, cv2.COLOR_BGR2GRAY)
anh3 = cv2.blur(anh1, (5,5))
kernel = numpy.array([[-1,-1,-1],[-1,9,-1],[-1,-1,-1]])
anh4 = cv2.filter2D(anh1, -1, kernel)
cv2.imshow("1", anh1)
cv2.imshow("2", anh2)
cv2.imshow("3", anh3)
cv2.imshow("4", anh4)

cv2.imwrite("E:\anh2.jpg", anh2)

start_point = (200, 0)
end_point = (400, 200)
color = (255, 0, 0)
thickness = 1
cv2.line(anh1, start_point, end_point, color, thickness)

cv2.rectangle(anh1, start_point, end_point, color, thickness)

center = (300,350)
radius = 20
cv2.circle(anh1, center, radius, color, thickness)

font = cv2.FONT_HERSHEY_SIMPLEX
size = 1
cv2.putText(anh1, "Hello", start_point, font, size, color, thickness)

cv2.imshow("5", anh1)

cv2.waitKey()
