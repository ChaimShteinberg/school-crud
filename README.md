# school-crud

מערכת לניהול רשימת תלמידים  

## תיאור הפרוקט

מערכת שמאפשרת ניהול רשימת תלמידים לתוך database ע"י 4 אפשריות   
   
1. create - הוספת תלמיד 
2. read - הצגת כל התלמידים
3. apdate - עדכון פרטי תלמיד לפי ID
4. delete - מחיקת תלמיד לפי ID

### מבנה תלמיד 

{
    id:id  
    name: name,   
    grade: grade  
}

## מבנה תיקייות

```
school-crud/
├── app.js                // הלוגיקה הראשית
├── db/
│   └── db.txt            // קובץ "המסד נתונים", מכיל תחילה []
├── modules/              // פונקציות עזר מופרדות לפי פעולה
│   ├── create.js
│   ├── read.js
│   ├── update.js
│   ├── delete.js
│   └── fileHelpers.js    // פונקציות עזר לקבצים
└── README.md
```