export function getCompletedLessons(courseId) {
  const key = `learnhub-course-${courseId}-completed`;

  return JSON.parse(localStorage.getItem(key)) || [];
}

export function saveCompletedLesson(courseId, lessonId) {
  const completedLessons = getCompletedLessons(courseId);

  const lessonNumber = Number(lessonId);

  if (!completedLessons.includes(lessonNumber)) {
    completedLessons.push(lessonNumber);
  }

  localStorage.setItem(
    `learnhub-course-${courseId}-completed`,
    JSON.stringify(completedLessons)
  );

  return completedLessons;
}

export function getCourseProgress(courseId, totalLessons) {
  if (!totalLessons) return 0;

  const completedLessons = getCompletedLessons(courseId);

  return Math.round(
    (completedLessons.length / totalLessons) * 100
  );
}