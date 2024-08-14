BUILD := dist
TARGET := ../KaichengYang.github.io

build: $(BUILD)

$(BUILD):
	npm run build
	cp $(BUILD)/index.html $(BUILD)/404.html
	rsync -a $(BUILD)/ $(TARGET)

.PHONY: clean
clean:
	rm -rf $(BUILD)