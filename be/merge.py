import os

EXTENSIONS = {'.js', '.env', '.gitignore', '.json', '.sql'}

OUTPUT_FILE = "src.txt"

PROJECT_DIR = "."

def merge_code_files():
    print(f"Read file {EXTENSIONS} ...")
    
    with open(OUTPUT_FILE, "w", encoding="utf-8") as outfile:
        for root, dirs, files in os.walk(PROJECT_DIR):
            if 'target' in root or '.git' in root or '.idea' in root or 'node_modules' in root:
                continue              
            for file in files:
                if file == OUTPUT_FILE:
                    continue

                if any(file.endswith(ext) for ext in EXTENSIONS):
                    file_path = os.path.join(root, file)
                    
                    outfile.write(f"\n{'='*50}\n")
                    outfile.write(f"FILE: {file_path}\n")
                    outfile.write(f"{'='*50}\n\n")
                    
                    try:
                        with open(file_path, "r", encoding="utf-8", errors="ignore") as infile:
                            outfile.write(infile.read())
                            outfile.write("\n")
                    except Exception as e:
                        outfile.write(f"[Lỗi: {e}]\n")
                        
    print(f"hẹ hẹ hẹ: {os.path.abspath(OUTPUT_FILE)}")

if __name__ == "__main__":
    merge_code_files()